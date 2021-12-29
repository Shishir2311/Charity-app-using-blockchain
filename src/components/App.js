import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Benefeciaries from './Benefeciaries';
import Navigation from './Navigation';
import Groceries from './Groceries';
import Stationery from './Stationery';
import Clothes from './Clothes';
import Projects from './Projects'
import Oxygen from './Oxygen';
import Meal from './Meal';
import Education from './Education';
import Recent from './Recent';
import Store from './Store';

import Web3 from 'web3'
import Marketplace from '../abis/Marketplace.json'
 
class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Marketplace.networks[networkId]
    if(networkData) {
      const marketplace = web3.eth.Contract(Marketplace.abi, networkData.address)
      this.setState({ marketplace })
      const donorCount = await marketplace.methods.donorCount().call()
      this.setState({ donorCount })
      const product2Count = await marketplace.methods.product2Count().call()
      this.setState({ product2Count })
      // Load products
      for (var i = 1; i <= donorCount; i++) {
        const donor = await marketplace.methods.donors(i).call()
        this.setState({
          donors: [...this.state.donors, donor]
        })
      }
      this.setState({ loading: false})
    } else {
      window.alert('Marketplace contract not deployed to detected network.')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      productCount: 0,
      product2Count: 0,
      donorCount: 1,
      products: [],
      donors: [],
      loading: true
    }

    this.donorInfo = this.donorInfo.bind(this)
    this.purchaseProduct = this.purchaseProduct.bind(this)
    this.donate = this.donate.bind(this)

    
  }

  donorInfo(name, price,pname) {
    this.setState({ loading: true })
    this.state.marketplace.methods.donorInfo(name, price,pname).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  purchaseProduct(id, price) {
    this.setState({ loading: true })
    this.state.marketplace.methods.purchaseProduct(id).send({ from: this.state.account, value: price })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  donate(name,id,price){
    this.setState({ loading: true })
    this.state.marketplace.methods.donate(name,id,price).send({ from: this.state.account, value: price })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation account={this.state.account}/>
          <br/>
            <Routes>
            <Route path='/' element={<Home/>} exact />
            <Route path='/Store' element={<Store/>} />
            <Route path='/Benefeciaries' element={<Benefeciaries/>} />
            <Route path='/Recent' element={<Recent products={this.state.products}
                  donors = {this.state.donors}
                 donorInfo={this.donorInfo}
                  purchaseProduct={this.purchaseProduct}/>} />
            
            <Route path='/Groceries' element={<Groceries  products={this.state.products}
                  donors = {this.state.donors}
                 donorInfo={this.donorInfo}
                  purchaseProduct={this.purchaseProduct}/>} />
                    <Route path='/Stationery' element={<Stationery  products={this.state.products}
                  donors = {this.state.donors}
                 donorInfo={this.donorInfo}
                  purchaseProduct={this.purchaseProduct}/>} />

            <Route path='/Clothes' element={<Clothes  products={this.state.products}
                  donors = {this.state.donors}
                 donorInfo={this.donorInfo}
                  purchaseProduct={this.purchaseProduct}/>} />

            <Route path='/Projects' element={<Projects   />
                  } />
                  <Route path='/Oxygen' element={<Oxygen  products2={this.state.products2}
                  donors = {this.state.donors}
                 donorInfo={this.donorInfo}
                  donate = {this.donate}/>} />
                   <Route path='/Meal' element={<Meal  products2={this.state.products2}
                  donors = {this.state.donors}
                 donorInfo={this.donorInfo}
                  donate = {this.donate}/>} />
                   <Route path='/Education' element={<Education  products2={this.state.products2}
                  donors = {this.state.donors}
                 donorInfo={this.donorInfo}
                  donate = {this.donate}/>} />
           </Routes>
         
          
            
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;