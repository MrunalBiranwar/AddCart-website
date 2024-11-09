import React from 'react'
class Addlist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productName:"",
            productPrice:0,
        }
    }
  render() {
    return (
        <form className="row my-5" onSubmit={(e)=>{
            e.preventDefault();
            this.props.addproduct(Number(this.state.productPrice) , this.state.productName)
        }}>
          <div className="col-4">
            <label for="exampleInputEmail1" className="form-label">
              ProductName
            </label>
            <input
              type="text"
              className="productName"
              id="name"
              aria-describedby="name"
              name='productName'
              onChange={(e)=>{
                this.setState({productName: e.currentTarget.value})
              }}
              value={this.state.productName}
            />
          </div>
          <div className="col-4">
            <label for="exampleInputPassword1" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="price"
              id="price"
              name='productPrice'
              onChange={(e)=>{
                this.setState({productPrice: e.currentTarget.value})
              }}
              value={this.state.productPrice}
            />
          </div>
          <button type="submit" className="btn btn-primary col-4">
            AddItem
          </button>
        </form>
    );
  }
}

export default Addlist;
