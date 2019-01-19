import React from 'react';
import PropTypes from 'prop-types';

const cssClassNames = {
  info: 'notification-info',
  success: 'notification-success',
  warning: 'notification-warning',
  error: 'notification-error',
}

export default class NotificationsComponent extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
    title: PropTypes.node,
    msg: PropTypes.node.isRequired,
    timeOut: PropTypes.number,
    removeNode: PropTypes.func.isRequired,
  };

  static defaultProps = {
    type: 'info',
    title: null,
    msg: 'Hello',
    timeOut: 3000,
  };

  componentDidMount() {
    const {id, removeNode, timeOut} = this.props;
    setTimeout(()=>{removeNode(id);}, timeOut);
  }

  render() {
    const {type, msg, title } = this.props;
    return (
      <div className={`notifications-wrapper ${cssClassNames[type]}`}>
        <div className="notifications-title">{title}</div>
        <div className="notifications-msg">{msg}</div>
      </div>
    )
  }
}
