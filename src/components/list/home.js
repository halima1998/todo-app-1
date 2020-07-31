import React from 'react'
import Navbar from "./layout/navbar"

const Home =() =>{
    return (
        <div>
         <Navbar/>
        <div className="container">
            <div className="py-4">
                <h3>Todo List</h3>
            </div>
        </div>

        </div>
    )
}
export default Home;