const Marketplace = artifacts.require('./Marketplace.sol')

require('chai').use(require('chai-as-promised')).should()

contract('Marketplace',([deployer,seller,buyer])=>{
	let marketplace 
	before(async () =>{
		marketplace = await Marketplace.deployed()
	})

	describe('deployment', async() => {
		it('deploys successfully', async() =>{
			const address = await marketplace.address;
			assert.notEqual(address,0x0)
		})
	
	})
	describe('donor',async() => {
		let result,donorCount
		before(async()=>{
			result = await marketplace.donorInfo('Aditya',web3.utils.toWei('1','ether'),{from: deployer})
			donorCount = await marketplace.donorCount()
		})
		it('add donor',async()=>{
			assert.equal(donorCount,2)
			const event = result.logs[0].args
			assert.equal(event.id.toNumber(),donorCount.toNumber(),'id is correct')
			assert.equal(event.name,'Aditya','name is correct')
			assert.equal(event.price,'1000000000000000000','price correct')


		})
	})

	describe('product', async() => {
		let result,productCount
		before(async () => {
		result = await marketplace.createProduct('iphone x',web3.utils.toWei('1','ether'),{from: seller})
		productCount = await marketplace.productCount()
		})	
		
		it('list products', async()=>{
			const product = await marketplace.products(productCount)
			assert.equal(product.id.toNumber(),productCount.toNumber(),'id is correct')
			assert.equal(product.name,'iphone x','name correct')
			assert.equal(product.price,'1000000000000000000','price correct')
			assert.equal(product.owner,seller,'owner is correct')
			assert.equal(product.purchased,false,'correct')
			
		})
		it('sells products', async()=>{
			//Track the seller balance before purchase
			let oldSellerBalance
			oldSellerBalance = await web3.eth.getBalance(seller)
			oldSellerBalance = new web3.utils.BN(oldSellerBalance)
			// sucess
			result = await marketplace.purchaseProduct(productCount,{from : buyer , value :web3.utils.toWei('1','ether')})

			// Check logs
			const event = result.logs[0].args
			assert.equal(event.id.toNumber(),productCount.toNumber(),'id is correct')
			assert.equal(event.name,'iphone x','name correct')
			assert.equal(event.price,'1000000000000000000','price correct')
			assert.equal(event.owner,buyer,'owner is correct')
			assert.equal(event.purchased,true,'correct')

			//Seller recieve funds
			let newSellerBalance
			newSellerBalance = await web3.eth.getBalance(seller)
			newSellerBalance = new web3.utils.BN(newSellerBalance)

			let price
			price = await web3.utils.toWei('1','Ether')
			price = new web3.utils.BN(price)

			// console.log(oldSellerBalance,newSellerBalance,price)
			const expectedBalance = oldSellerBalance.add(price)
			assert.equal(newSellerBalance.toString(),expectedBalance.toString())

			//Failure: tries to buy a product that does not exitst

			await marketplace.purchaseProduct(99,{ from:buyer, value:web3.utils.toWei('1','Ether') }).should.be.rejected
			// buyer tries to buy without enough ether
			await marketplace.purchaseProduct(productCount,{ from:buyer, value:web3.utils.toWei('0.5','Ether') }).should.be.rejected
			// depolyer tries to buy product
			await marketplace.purchaseProduct(productCount,{ from:deployer, value:web3.utils.toWei('1','Ether') }).should.be.rejected
			// buyer can't be the seller
			await marketplace.purchaseProduct(99,{ from:buyer, value:web3.utils.toWei('1','Ether') }).should.be.rejected
			
		})
	})

})