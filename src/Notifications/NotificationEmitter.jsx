import {EventEmitter} from 'events';

const CONSTANTS = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
  change: 'notification-change',
};

class NotifcationEmitter extends EventEmitter {
  constructor() {
    super();
    this.notificationList = [];
  }

  emitChange = () => {
    this.emit(CONSTANTS.change, this.notificationList);
  }

  createId = (msg) => {
    const shortMsg = msg.slice(0,5);
    const randomNumber1 = Math.floor(Math.random()*100000);
    const randomNumber2 = Math.floor(Math.random() * 100000);
    const id = randomNumber1 + '-' + shortMsg + '-' + randomNumber2;
    return id;
  }

  createNotifictions = (type, notificationObject) => {
    const {msg, title, timeOut} = notificationObject;
    const id = this.createId(msg);
    this.notificationList.push({
      id,
      msg,
      title,
      type,
      timeOut,
      removeNode: this.removeNode
    });
    this.emitChange();
  }

  info = (msg, title) => {
    this.createNotifictions(CONSTANTS.info, { msg, title });
  }

  success = (msg, title) => {
    this.createNotifictions(CONSTANTS.success, { msg, title });
  }

  warning = (msg, title) => {
    this.createNotifictions(CONSTANTS.warning, { msg, title });
  }

  error = (msg, title) => {
    this.createNotifictions(CONSTANTS.error, { msg, title });
  }

  addChangeListener(callbackFn) {
    this.addListener(CONSTANTS.change, callbackFn)
  }

  removeNode = (id) => {
    const newNotificationList = (this.notificationList).filter(elem=>(elem.id !== id));
    this.notificationList = newNotificationList;
    this.emitChange();
  }
}

export default new NotifcationEmitter();