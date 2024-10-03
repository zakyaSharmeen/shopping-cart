import React from 'react'
import "./style.css"
import Filter from './Filter';
import { CartState } from '../contex/Context'
import SingleProducts from './SingleProducts';

function Home() {

  // this has come becoz of usecontext hook
  const {state : { products }, 
  productState: {sort,byStock,byFastDelivery,byRating, searchQuery}

   } = CartState();
  
  
  // console.log(products);

  const tranfromProducts = () =>{
    let sortedProducts = products;

    if(sort) {
      sortedProducts = sortedProducts.sort((a, b) => 
      sort === "lowToHigh" ? a.price - b.price : b.price - a.price)
    }

    if(!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock)
    }

    if(byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.byFastDelivery)
    }

    if(byRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.byRating >= byRating)
    }

    
    if(searchQuery) {
      sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery)
    )
    }
    return sortedProducts
  }
  

  return (
    <>
    <div className="home">
      <Filter/>
      <div className="productContainer">
        {
          tranfromProducts().map((prod) => {
            return <SingleProducts prod= {prod} key={prod.id}/>
          })
        }
      </div>
    </div>
    </>
  )
}

export default Home