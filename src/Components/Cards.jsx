import React from 'react'
import Card from './Card';

const Cards = (props) => {
  
  return (
      <>
      {props.allData.map((x, indeks) => {if (indeks >= (props.currentPage * 3) && indeks < (props.currentPage + 1) * 3 ) return <Card  setRenderProduct = {props.setRenderProduct} setProductToRender = {props.setProductToRender} key = {x.id} data = {x}></Card>})}
      </>

    )
}


export default Cards