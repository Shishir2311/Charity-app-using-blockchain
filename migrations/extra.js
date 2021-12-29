<form onSubmit={(event) => {
          event.preventDefault()
          const name = this.productName.value
          const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
          this.props.donorInfo(name, price)
          this.props.purchaseProduct(1,price)
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
              readonly class="form-control-plaintext"
              value="1"              required />
            </div>
          </div>
           <button type="submit" className="btn btn-primary">Donate</button>
      </form>