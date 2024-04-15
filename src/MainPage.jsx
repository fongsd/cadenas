/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import Cards from "./Components/Cards";
import Buttons from "./Components/Buttons";
import Product from "./Components/Product";

function MainPage() {
    const [allData, setAllData] = useState([]);
    const [flag, setFlag] = useState(false);
    const [currentProductToRender, setProductToRender] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [renderProduct, setRenderProduct] = useState(false);
    useEffect(() => { 
        fetchData()
    },[])

    const fetchData = async()=> {
        try{
           const fetchAllData = await fetch(`https://dummyjson.com/products?limit=40`).then(x=> {return x.json()});
        //    console.log(fetchAllData);
        setAllData(fetchAllData);
        setFlag(true);
        }catch(err){
            console.log(err)
        }
    }
    // console.log("Redner product " + renderProduct);
    return (
      <div>
        {!renderProduct && <h1>All proucts</h1>}
        {!renderProduct && flag &&  <Cards setProductToRender = {setProductToRender} setRenderProduct = {setRenderProduct} currentPage = {currentPage} allData = {allData.products} ></Cards>}
        {!renderProduct && flag && <Buttons currentPage = {currentPage} setCurrentPage = {setCurrentPage} numberOfProducts = {allData.products.length}></Buttons>}
        {renderProduct && <Product setRenderProduct ={ setRenderProduct} data = {currentProductToRender}></Product>}
      </div>
    )
    
}

export default MainPage