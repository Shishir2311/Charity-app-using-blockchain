pragma solidity ^0.5.0;
contract Marketplace{
	struct Product{
		uint id;
		string name;
		uint price;
		address payable owner;
		bool purchased;
	}
	struct Product2{
		uint pid;
		string pname;
		address payable owner;
	}
	struct Donor{
		uint id;
		string name;
		uint price;
		address payable dAddress;
		string pname;
	}

	event ProductCreated(
		uint id,
		string name,
		uint price,
		address payable owner,
		bool purchased
	);
	event ProductPurchased(
		uint id,
		string name,
		uint price,
		address payable owner,
		bool purchased
	);
	event donorAdded(
		uint id,
		string name,
		uint price,
		address payable dAddress,
		string pname
	);
	event addedProduct(
		uint pid,
		string pname,
		address payable owner 
	);
	event donated(
		uint pid,
		string pname,
		address payable owner
	);

	
	mapping (uint => Donor) public donors;
	mapping (uint => Product) public products;
	mapping (uint => Product2) public products2;
	uint public productCount=0;
	uint public donorCount=0;
	uint public product2Count=0;

	constructor() public{
        createProduct('food',1000000000000000000);
        createProduct('clothes',1000000000000000000);
        createProduct('stationery',1000000000000000000);  
        donorInfo('Shishir', 1000000000000000000, 'Clothes');
        addProduct('Project Meal');
        addProduct('Project Education');
        addProduct('Mission oxygen');


    }

    function addProduct(string memory _name) public payable{

    	require (bytes(_name).length>0);
    	product2Count++;
    	products2[product2Count] = Product2(product2Count,_name,msg.sender);
    	emit addedProduct(product2Count,_name,msg.sender);
    
    }

	function createProduct(string memory _name, uint _price) public{
		//Make sure parameters are correct
			//require valid name
			require (bytes(_name).length>0);
			//require valid price
			require (_price>0);
			
		//increment product count
		productCount++;
		// create product
		products[productCount]= Product(productCount,_name,_price,msg.sender,false);
		// trigger an event
		emit ProductCreated(productCount,_name,_price,msg.sender,false);
	}

	function purchaseProduct(uint _id) public payable{
		// fetch the products
		Product memory _product = products[_id]; // having a copy of product
		//fetch the owner
		address payable _seller = _product.owner;
		//make sure product is valid
		// make sure product has valid id
		require(_product.id>0 && _product.id<=productCount);
		//require that ether is enough
		require(msg.value >= _product.price);
		//Require product is available
		// transfer ownership to the buyer
		// _product.owner = msg.sender;
		//purchase the product
		// _product.purchased = true;
		// update the product
		products[_id] = _product; // put it back in actual copy
		// pay the seller sending them ether
		address(_seller).transfer(msg.value);
		//trigger event
		emit ProductPurchased(productCount,_product.name,_product.price,msg.sender,true);


	}
	function donate(string memory _name,uint _id, uint _price) public payable{
		Product2 memory _product2 = products2[_id]; // having a copy of product
		//fetch the owner
		address payable _seller = _product2.owner;
		//make sure product is valid
		require(_product2.pid>0 && _product2.pid<=productCount);

		address(_seller).transfer(msg.value);
		//trigger event
		emit donated(product2Count,_product2.pname,msg.sender);


	}

	function donorInfo(string memory _name, uint _price, string memory _pname) public{
		//Make sure parameters are correct
		//require valid name
		require (bytes(_name).length>0);	
		//increment product count
		donorCount++;
		// create product
		donors[donorCount]= Donor(donorCount,_name,_price,msg.sender,_pname);
		// trigger an event
		emit donorAdded(donorCount,_name,_price,msg.sender,_pname);
	}

}
