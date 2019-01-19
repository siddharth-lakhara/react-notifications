import React, { Component } from 'react'
import { NotificationEmitter, NotificationsGroup} from '.';
import './notifications.css';

export default class NotificationListener extends Component {
  state = {
    notificationsList: []
  }

  componentWillMount = () => {
    NotificationEmitter.addChangeListener(this.handleNotificationChanges);
  };

  componentWillUnmount = () => {
    NotificationEmitter.removeChangeListener(this.handleNotificationChanges);
  };

  handleNotificationChanges = (notificationsList) => {
    this.setState({notificationsList});
  }

  render() {
    const {notificationsList}  = this.state;
    return (
      <div className="notificationGroup-wrapper">
        <NotificationsGroup notificationsList={notificationsList}/>     
      </div>
    )
  }
}
