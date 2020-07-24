import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import axios from "axios";

export default class AllTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allTodo: [],
            todo: ""
        }
    }


    handelChnage = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        })
    }

    handelSubmit = () => {
        const {todo} = this.state;
        const { id } = JSON.parse(localStorage.getItem("user"));
        axios.post("add/todo", {
            todo: todo,
            users_id: id
        })
        .then((res) => {
            this.setState({
                allTodo: [res.data.data[0], ...this.state.allTodo ],
                todo: ''
            })
        })
    }
    
    componentDidMount() {
        const { id } = JSON.parse(localStorage.getItem("user"));
        axios.get(`getAllTodo/${id}`)
        .then((res) => {
            console.log(res.data)
            this.setState({
                allTodo: res.data,
            })
        })
    }
    removeTodo=() =>{
        const {todo} = this.state;
        const { id } = JSON.parse(localStorage.getItem("list"));
        axios.post("delet/todo", {
            todo: todo,
            users_id: id
        })
        .then((res) => {
            this.setState({
                    todo:this.state.name
            })
        })

    }
    render() {
        return (
            <React.Fragment>
                <Container maxWidth="sm">
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <TextField
                            placeholder="Placeholder"
                            variant="outlined"
                            label="Add Todo"
                            value={this.state.todo}
                            name="todo"
                            onChange={this.handelChnage}
                            removeTodo={this.removeTodo}
                        />
                        <Button variant="contained" color="primary" onClick={this.handelSubmit}>Add</Button>
                    </Grid>
                        <List>
                            {this.state.allTodo.map((item) => (
                                <ListItem>
                                    <ListItemText>{item.todo}</ListItemText>
                                    <Button variant="outlined" color="primary">Update</Button>
                                    <Button variant="outlined" color="secondary" onClick={this.removeTodo}>Delete</Button>
                                </ListItem>
                            ))}
                        </List>
                </Container>
            </React.Fragment>
        )
    }
}