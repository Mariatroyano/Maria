
import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import { Product } from "./product";


function App() {
  const [productList] = useState(Product)
  const [filters, setFilters] = useState({
    category:'clothing',
    title:'all',
    description:'all',
    minPrice: 14000


  

  })
  const filtersProducts = (productList) =>{
    return productList.filters(productList =>{
      return(
        productList.price >= filters.minPrice &&
        (
          filters.category === "all" ||
          productList.category === filters.category
        )
      )

    })
  }







  return (
    <>
      <div>App</div>
      <ProductList />
    </>
  );
}

export default App;
