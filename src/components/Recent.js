import React, { Component } from 'react';
class Groceries extends Component {

    render() {
      return (
        <div >
              <h2 style={{width : "500px",margin:"auto"}} >Recent transactions</h2>
              <br/>
              <br/>
              <br/>
      
      <table className="table" >
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Amount donated</th>
              <th scope="col">Address</th>
              <th scope="col">Product</th>

            </tr>
          </thead>
           <tbody id="productList">
            { this.props.donors.map((donor, key) => {
              return(
                <tr key={key}>
                  <th scope="row">{donor.id.toString()}</th>
                  <td>{donor.name}</td>
                  <td>{window.web3.utils.fromWei(donor.price.toString(), 'Ether')} Eth</td>
                  <td>{donor.dAddress}</td>
                  <td>{donor.pname}</td>
                   </tr>
              )
            })}
          </tbody>
        </table>
        </div>
    );
}
}

 
export default Groceries;