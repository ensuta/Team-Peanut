import React, { Component } from 'react';
import Form from './components/Form';
import TodoListTemplate from './components/TodoTemplate';
class App extends Component {
  state = {
    hello: "hello app js!"
  };

  render() {
    return (<TodoListTemplate form={<Form/>}>템플릿 완성</TodoListTemplate>);
  }
}
export default App;
