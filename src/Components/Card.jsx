import React from 'react'

const Card = (props) => {
  return (
    <div className='table-wrapper'>
    <table className='fl-table'>
      <thead>
        {/* <tr>
          <td>
            Name
          </td>
          <td>
            Image
          </td>
        </tr> */}
      </thead>
      <tbody>
      <tr>
        <td onClick={() => {props.setRenderProduct(true); props.setProductToRender(props.data.id);}}>{props.data.title}</td>
        <td>
        <img onClick={() => {props.setRenderProduct(true); props.setProductToRender(props.data.id);}} width = "60%" height = "auto" src = {props.data.images[0]}></img>
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

export default Card