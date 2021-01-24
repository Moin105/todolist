import React, { Component } from 'react'

import '../scss/Addtodo.scss';
export class Addtodo extends Component {
state ={
    title: ''
}

onSubmit=(e) =>{ 
    e.preventDefault();
 if (this.state.title !== '') {
    this.props.addTodo(this.state.title);
    this.setState({title:''})
}
    else{
    alert('Please enter task')
}
}


onChange =(e) => this.setState({ [e.target.name]: e.target.value} );


    render() {
        return (
            <form className={'forum'} onSubmit={this.onSubmit} >

                <input  type='text'
                name='title'
                placeholder='Add Todo...'
                className ={'todo'}
                value={this.state.title}
                onChange ={this.onChange}
                />
                <input
                type='submit'
                value='Submit'
                className={'btn'}
                />
            </form>
        )
    }
}

export default Addtodo
