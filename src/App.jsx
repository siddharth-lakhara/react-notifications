import React, { Component } from 'react';
import './App.css';
import { NotificationEmitter, NotificationListener} from './Notifications';

class App extends Component {

  createNotification = (type) => {
    switch(type) {
      case 'success':
        NotificationEmitter.success('some success message');
        break;
      case 'info':
        NotificationEmitter.info('some info message');
        break;
      case 'warning':
        NotificationEmitter.warning('some warning message');
        break;
      case 'error':
        NotificationEmitter.error('some error message');
        break;
      default: 
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={()=>{this.createNotification('success')}}>Success</button>
        <button onClick={() => { this.createNotification('info') }}>Info</button>
        <button onClick={()=>{this.createNotification('warning')}}>Warning</button>
        <button onClick={()=>{this.createNotification('error')}}>Error</button>
        <NotificationListener />
      </div>
    );
  }
}

export default App;
