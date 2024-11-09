import './App.css';
import Navbar from './components/Navbar';
import Productlist from './components/Productlist'
import React,{useState} from 'react';
import Footer from './components/Footer.js'
import Addlist from './components/Addlist.js'

function App() {
  const product = [
    {
      price: 99999,
      productName: "Iphone 10S Max ",
      quantity:0,
    },
    {
      price: 9999,
      productName: "Redmi 10R ",
      quantity:0,
    }
  ]
  let [productlist , setProductList] = useState(product);
  let [totalAmount , setTotalAmount] = useState(0);
  const incrementQuantity = (index) =>{
    let newQuantityList = [...productlist];
    let newAmount = totalAmount;
    newQuantityList[index].quantity++
    newAmount += newQuantityList[index].price;
    setTotalAmount(newAmount);
    setProductList(newQuantityList);

  }
  const decrementQuantity = (index) =>{
    let newQuantityList = [...productlist];
    let newAmount = totalAmount;
    if(newQuantityList[index].quantity > 0 ){
       newQuantityList[index].quantity-- 
       newAmount -= newQuantityList[index].price;
    }else{
      newQuantityList[index].quantity = 0;
    }
    setTotalAmount(newAmount);
    setProductList(newQuantityList);
  }
  const resetData = (index) =>{
    let newQuantityList = [...productlist];
    newQuantityList.map((product)=>{
      product.quantity = 0;
    })
    setProductList(newQuantityList);
    setTotalAmount(0);
  }
  const removeproduct = (index) =>{
    let newQuantityList = [...productlist];
    let newAmount = totalAmount;
    newAmount -= newQuantityList[index].quantity*newQuantityList[index].price;
    newQuantityList.splice(index,1);
    setProductList(newQuantityList);
    setTotalAmount(newAmount);
  }
  const addproduct = (price , productName) =>{
    let newQuantityList = [...productlist];
    newQuantityList.push({
      price:price,
      productName:productName,
      quantity:0,
    })
    setProductList(newQuantityList);
  }
  return (
    <>
    <Navbar/>
    <main className='container mt-5'>
    <Addlist addproduct={addproduct}/>
    <Productlist product={productlist} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeproduct={removeproduct} />
    <Footer totalAmount={totalAmount} resetData={resetData}/>
    </main>
    </>
  );
}

export default App;
