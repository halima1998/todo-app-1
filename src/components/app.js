import React, { Component } from 'react'
import TodoList from './Todolist';
import TodoInput from './todoInput';
import Header from "./HR/header"
import Footer from "./HR/footer"
import axios from 'axios'

export default class app extends Component {
    state={
        items:[],
        item:'',
        editItem:false,
        todo_id: ''
    }

    handleChange = e =>{
        this.setState({
            item:e.target.value
        });
    }
    
    componentDidMount() {
        const { id } = JSON.parse(localStorage.getItem("user"));
        axios.get(`getAllTodo/${id}`)
        .then((res) => {
            this.setState({
                items:res.data
            });
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        const {todo_id, item, editItem, items } = this.state;
        let newItem = items;
        const {id} = JSON.parse( localStorage.getItem("user"));
        if (editItem) {
            axios.put(`update/${todo_id}`, {
                todo: item
            }).then((res) => {
                items.map((todo_list, index) => {
                    if(todo_list.id == todo_id) {
                        newItem[index].todo = item;
                    }
                });
                this.setState({
                    items: newItem,
                    editItem: false,
                    item: ''
                })
            })
        } else {
            axios.post("add/todo", {
                todo: item,
                users_id: id
            }).then((res) => {
                const addedItem = [res.data.data[0], ...this.state.items]
                this.setState({
                    items: addedItem,
                    item: '',
                })
            })
        }
}
    clearList =(id)=>{
        if(window.confirm("are you sure to delete all todo")){
            axios.delete("/delete/all",{
                id:id 
             })
             .then(() =>{     
                 this.setState({
            items:[]
        })
    })
    }
    };
    handleDelete = (id) => {
        if (window.confirm("are you sure to delete this todo")) {
            const newItem = this.state.items.filter((item) => item.id !==id)
            this.setState({
                items: newItem
            });
            
            axios.delete(`/delete/todo/${id}`)
            .then((res) => {
                console.log(res)
            })
    }
    };
    handleEdit = id => {
        const selectedItem = this.state.items.filter(item => item.id==id)
        this.setState({
            todo_id: id,
            editItem:true,
            item: selectedItem[0].todo
        });
        axios.put(`/update/${id}`)
        .then((res) => {
            console.log(res)
        })
    }
    render() {
        return (
            <body>
                <Header/>
            <div className="container4">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <h3 className="text-capitalize text-center">todo input</h3>
                  <TodoInput item={this.state.item}
                   handleChange={this.handleChange}
                   handleSubmit={this.handleSubmit}
                   editItem={this.state.editItem}
                   todo_id= {this.state.todo_id}
                   />

                  <TodoList items={this.state.items}
                  clearList={this.clearList}
                  handleDelete={this.handleDelete}
                  handleEdit={this.handleEdit}/>
                    </div>
                </div>
            </div>
            <Footer/>
            </body>
        )
    }
}
