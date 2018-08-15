import React from "react";

export class Todo1 extends React.Component {
  state = {
    todos: [
      {
        description: "Learn MongoDB",
        isDone: false
      },
      {
        description: "Learn Heroku",
        isDone: true
      }

      
    ],
    newTodoDescription: "",
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  handleAddTodo = (index) => {
    const newTodoDescription = this.state.newTodoDescription
      if(index != null){
        const editedTodo = this.state.todos[index] = {
          description: newTodoDescription,
          isDone: false,
        }
        const newTodos = [
          editedTodo,
          ...this.state.todos,
        ]
    
        this.setState({todos: newTodos,})
      }

      else{
        const newTodo = {
          description: newTodoDescription,
          isDone: false,
        }
        const newTodos = [
          newTodo,
          ...this.state.todos,
        ]
        this.setState({
          todos: newTodos,
        })
      }

  }
  
  // handleEditTodo = (index) => {
  //   const editedTodoDescription = this.state.editedTodoDescription

  //   if (editedTodoDescription != null) {
  //     const editedTodo = this.state.todos[index] = {
  //     description: editedTodoDescription,
  //     isDone: false,
  //   }
  //   const newTodos = [
  //     editedTodo,
  //     ...this.state.todos,
  //   ]

  //   this.setState({todos: newTodos,})
  // }
  // else{
  //   alert ("Please enter something in the edit field!");
  // }

  // }

  handleDeleteTodo = (index) => {
    const newTodos = this.state.todos;
    newTodos.splice(index, 1);
    this.setState({todos:newTodos});

  }
  handleTodoClick = currentTodo => {
    if (currentTodo.isDone) {
      currentTodo.isDone = false;
    } else {
      currentTodo.isDone = true;
    }

    const updatedState = {
      todos: this.state.todos
    };

    this.setState(updatedState);
  };


  render() {
    return (
      <div>
        <div>
        <h1>Things To Do!</h1>
        <p id ="note">
          Note: <br/> Enter something in the field. <br/>
          Click '+' to add a new Todo or 'Edit' to change the todo to the new input
        </p>
        </div>
        {/* <label><input type = "checkbox" name = "edit" id="edit"/>Edit List</label> */}
        <label htmlFor = "newTodoDescription"> Add/Edit Todo </label>
        <br/>
        <input 
          type = "text" 
          value = {this.state.newTodoDescription}
          name = "newTodoDescription" 
          id = "newTodoDescription" 
          onChange = {this.handleOnChange}
        />
        <button onClick = {this.handleAddTodo}>+</button>
        <br/>
        <br/>
        {/* <label htmlFor = "editedTodoDescription"> Edit Todo </label><br/> 
        <input
                  type = "text"
                  value = {this.state.a}
                  name = "editedTodoDescription"
                  id = "editedTodoDescription"
                  onChange = {this.handleOnChange}
        /> */}
        
        <ul>
          {this.state.todos.map((a, index) => {
            let completeClass = "";
            if (a.isDone) {
              completeClass = "complete";
            }
            return (
              <li
                className={completeClass}
                onClick={() => this.handleTodoClick(a)}
              >
                <button onClick = {this.handleDeleteTodo.bind(this, index)}>x</button>
                <button onClick = {this.handleAddTodo.bind(this, index)}>Edit</button>
                {a.description}
                <br/>

                
              </li>
              
            );
          })}
        </ul>
        
      </div>
      
    );
  }
}
