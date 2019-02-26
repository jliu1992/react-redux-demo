import React, { Component } from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import AddRemark from './components/AddRemark';
import RemarkList from './components/RemarkList';

import rootReducer from './reducers'
import 'antd/dist/antd.css';

const store = createStore(rootReducer);

class App extends Component {
  constructor() {
    super();
    this.state = {
      remarks: ['1','2'],
    };
    this.addRemark = this.addRemark.bind(this);
    this.delete = this.delete.bind(this);
  }

  addRemark(remark) {
    const {remarks} = this.state;
    remarks.push(remark);
    this.setState({remarks});
  }

  delete(remark) {
    const {remarks} = this.state;
    this.setState({remarks: remarks.filter(item => item !== remark)});
  }

  render() {
    return (
      <Provider store={store}>
        <div style={{margin: 20}}>
          <AddRemark />
          <RemarkList />
        </div>
      </ Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
