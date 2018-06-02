import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      todos: [
        // {id : 1 , title: '吃饭' , done: false},
        // {id : 2 , title: '吃饭1' , done: true},
        // {id : 3 , title: '吃饭' , done: false},
        // {id : 4 , title: '吃饭1' , done: true}
      ]
    }
  }
  // 遍历list
  getTodoList = () => {
    return (
        this.state.todos.map(item => {
            return (
              <li key={item.id}>
                <div className="view">
                  <input className="toggle" type="checkbox" defaultChecked />
                  <label>{item.title}</label>
                  <button className="destroy"></button>
                </div>
               <input className="edit" defaultValue="Create a TodoMVC template" />
              </li>
              )
          })
      )
  }
  //处理添加事件
  handleAdd = (e) => {
 
    const {target, keyCode} = e
    if (keyCode === 13) {
      if (target.value.trim().length === 0) {
        return
      }
      // 修改数据
      this.state.todos.push({
        id:Math.random(),
        title: target.value,
        done: false
      })
      // 通知视图更新
      this.setState({
        todos:this.state.todos
      })
      // 清空文本框
      target.value = ''
    }
  }

  render() {
    return (
      <div>
         <section className="todoapp">
            <header className="header">
              <h1>todos</h1>
              <input 
              className="new-todo" 
              placeholder="What needs to be done?" 
              autoFocus 
             onKeyUp={this.handleAdd} 
              />
            </header>
          {/** This section should be hidden by default and shown when there are todos */}
          {this.state.todos.length > 0 && (
              <div>
                <section className="main">
                  <input id="toggle-all" className="toggle-all" type="checkbox" />
                  <label htmlFor="toggle-all">Mark all as complete</label>
                  <ul className="todo-list">
                    {/** These are here just to show the structure of the list items */}
                    {/** List items should get the class `editing` when editing and `completed` when marked as completed */}
                    {/* 遍历 li*/ }      
                    {this.getTodoList()}
                  </ul>
                </section>
               <footer className="footer">
                  {/** This should be `0 items left` by default */}
                  <span className="todo-count"><strong>0</strong> item left</span>
                  {/** Remove this if you don't implement routing */}
                  <ul className="filters">
                    <li>
                      <a className="selected" href="#/">All</a>
                    </li>
                    <li>
                      <a href="#/active">Active</a>
                    </li>
                    <li>
                      <a href="#/completed">Completed</a>
                    </li>
                  </ul>
                  {/** Hidden if no completed items are left ↓ */}
                  <button className="clear-completed">Clear completed</button>
               </footer>
              </div>      
        )}   
        </section> 
         {/** This footer should hidden by default and shown when there are todos */}          
        <footer className="info">
          <p>Double-click to edit a todo</p>
          {/** Remove the below line ↓ */}
          <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
          {/** Change this out with your name and url ↓ */}
          <p>Created by <a href="http://todomvc.com">you</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
    </div>
    );
  }
}

export default App;
