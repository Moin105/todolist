import React,{ Component } from 'react';
import Todos from './components/Todos';
import { BrowserRouter as Router ,Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Addtodo from './components/Addtodo';
import about from './components/pages/about';
import { v4 as uuidv4 } from 'uuid';

import './scss/main.css';

class App extends Component {

  state = {
    todos:[
      {
        id:  uuidv4(),
         title:'brush your teeth',
        completed: false
      },
      {
        id:  uuidv4(),
         title:'complete your react task',
        completed: false
      },
      {
        id:  uuidv4(),
         title:'goto sleep',
        completed: false
      }
    ], 
    completedTasks: []
  }
markComplete =(id) => {
  this.setState ({ todos:this.state.todos.map(todo=>{
    if(todo.id ===id){
      todo.completed = !todo.completed
      }
    return todo;
  }) } );
}

  handleTasks = () => {
    if(this.state.completedTasks.length === 0 ){ console.log('fefef')
      this.setState({completedTasks:[...this.state.todos.filter(todo =>todo.completed === true)]})
    }  
    else{
      this.setState({completedTasks: []});
    }
  }


delTodo = (id) => {
this.setState({todos:[...this.state.todos.filter(todo =>todo.id!==id)]})

}



addTodo = (title) =>{
  const newTodo ={
    id:  uuidv4(),
    title,
    completed:false
  }
  if (this.state.title ===''){

    alert="enter things todo"
  } else
this.setState({todos:[...this.state.todos,newTodo]})
}



  render() {
    return(
      <Router>

        <div className='App'>

            <div className="container">

                <Header/>
                <Route exact path="/" render={props =>(
                  <React.Fragment>
                     <Addtodo addTodo={this.addTodo}/>
                       <Todos todos={this.state.completedTasks.length === 0 ? this.state.todos : this.state.completedTasks} markComplete={this.markComplete}
                      delTodo={this.delTodo}/>
                      <button className={'handleBtn'} onClick={this.handleTasks}>COMPLETED TASK</button>
                      
                  </React.Fragment>
              )}/>
              <Route path= "/about" component = {about}/>

            </div>

        </div>
     
      </Router>
    );
  }
}

export default App;