import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Todoitem extends Component {

    getStyle = () =>{
  return{
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
  }
}


    render() {
        const { id,title }= this.props.todo;
        return (
            <div className={'active'} style ={this.getStyle()}>
                <p>
                    <input className={'chk'} type='checkbox'onChange={this.props.markComplete.bind
                    (this,id)}/>{' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} className={'btnStyle'}>x</button>
                </p>
            </div>
        )
    }

}
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
  }



export default Todoitem;
