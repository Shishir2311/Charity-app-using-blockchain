import React, { Component } from 'react';

class Education extends Component {

  render() {
    return (
       <div id="content">
       <br/>
        <h2 style={{width : "500px",margin:"auto"}} >Donate for Girl's Educations</h2>
       <br/>
       <br/>

       <div style={{width : "500px",margin:"auto"}}>
      <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.productName.value
          const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
          const pname = 'Project Education'
          this.props.donorInfo(name,price,pname)
          this.props.donate(name,2,price)
        }}>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input
              id="productName"
              type="text"
              ref={(input) => { this.productName = input }}
              className="form-control"
              placeholder="Enter your name"
              required />
            </div>
        </div>
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Amount</label>
            <div class="col-sm-10">
             <input
              id="productPrice"
              type="text"
              ref={(input) => { this.productPrice = input }}
                      required />
            </div>
          </div>
           <button type="submit" className="btn btn-primary">Donate</button>
      </form>
      <br/>
      </div>
      </div>
    );
  }
}

export default Education;
