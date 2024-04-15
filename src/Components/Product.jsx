import React, { useEffect, useState } from 'react'
import '../index.css';
const Product = (props) => {

 const [productById, setProductById] = useState({});
 const [fetchedData, setFetchedData] = useState(false);
 const [mainImage, setMainImage] = useState(null)
 const fetchProductById = async () => {
    const fetchData = await fetch(`https://dummyjson.com/products/${props.data}`).then(x => {return x.json()});
   //  console.log(fetchData);
    setProductById(fetchData);
    setMainImage(fetchData.images[0])
   // console.log(fetchData.images[0]);
    setFetchedData(true);
 }
 useEffect(()=>{
    fetchProductById();
 }, []);

  
//  console.log(productById);


//  console.log(productById.images);
  return (
   <div >
    <div className = "mojaPrva">
      <button className="backButton" onClick={() => {props.setRenderProduct(false)}}> {"<-back"}</button>
      <div className='galerija'>
      </div>
      {fetchedData && <h2>{productById.title}</h2>}
      {fetchedData && <img className="mainImg" src = {mainImage} alt="main pic"></img>}
      {fetchedData && productById.images.map((x, indeks)=> {return <img key = {indeks} onClick={() => setMainImage(x)} className="imgSlides" src = {x} ></img>})}
   </div>
   <div className='table-wrapper'>
      <table className='fl-table'>
         <thead>
         <tr>
            <th>Brand</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Descrpition</th>
         </tr>
         </thead>
         <tbody>
         <tr>
      <td>{fetchedData && <blockquote>{productById.brand}</blockquote>}</td>
      <td>{fetchedData && <blockquote>{productById.price}$</blockquote>}</td>
      <td>{fetchedData && <blockquote>{productById.rating}</blockquote>}</td>
      <td>{fetchedData && <blockquote>{productById.stock}</blockquote>}</td>
      <td>{fetchedData && <blockquote>{productById.description}</blockquote>}</td>
      </tr>
      </tbody>
      </table>
    </div>
    </div>
  )
}

export default Product