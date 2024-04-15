import React from 'react'
import '../index.css';
const Button = (props) => {
  
  function getPagination(){
    if (props.number == props.currentPage){
      return "paginationCurrent";
    }
    else { 
      return "pagination"
    }
  }
  return (
    <button className={getPagination()} onClick={() => {props.setCurrentPage(props.number)}} key = {props.currentPage} >{props.number + 1}</button>
  )
}

export default Button