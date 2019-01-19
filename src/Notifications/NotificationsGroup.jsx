import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {NotificationsComponent} from '.';

export default class NotificationsGroup extends Component {
  static propTypes = {
    notificationsList: PropTypes.array.isRequired,
  };

  render() {
    const { notificationsList } = this.props;
    const notifications = notificationsList.map((elem)=>{
      const {id, ...rest} = elem;
      return (
        <NotificationsComponent 
          key={id}
          id={id}
          {...rest}
        />
      );
    })
    return (
      <div className=".notificationGroup-container">
        {notifications}
      </div>
    )
  }
}
