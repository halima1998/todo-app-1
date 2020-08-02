import React, { Component } from 'react'
 class Todoitem extends Component {
    render() {
        const {title,handleDelete,handleEdit} =this.props
        return (
            <li className="list-group-item
             d-flex justify-content-between my-2">
                 <h6>{title}</h6>
                 <div>
                     <span className="mx-2 text-success" onClick={handleEdit}>
                         <button className="btn-success">Edit</button>
                     </span>
                     <span className="mx-2 text-danger" onClick={handleDelete}>
                     <button className="btn-danger">Delete</button>
                     </span>
                 </div>
             </li>
        )
    }
 }
 export default Todoitem;