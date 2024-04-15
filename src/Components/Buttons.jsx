/* eslint-disable no-unused-vars */
import React from 'react'
import '../index.css';
import Button from './Button';
const Buttons = (props) => {

  const numberOfPages = Math.ceil(props.numberOfProducts/3);
  const pageArray = Array.from(Array(numberOfPages).keys());
  // console.log(pageArray);
  return (
    <div>
      {pageArray.map((x, indeks)=> {return <Button currentPage = {props.currentPage} setCurrentPage = {props.setCurrentPage} key = {x} number = {indeks}></Button>})}
    </div>
  )
}

export default Buttons