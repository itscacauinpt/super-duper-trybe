import INotification from "./INotification";

const consoleNotification: INotification = {
  type: 'Console',
  send: (message) => console.log('Console:', message),
};

const emailNotification: INotification = {
  type: 'Email',
  send: (message) => console.log('Email:', message),
};

const phoneNotification: INotification = {
  type: 'Phone',
  send: (message) => console.log('Phone:', message),
};

const Notifications: INotification[] = [
  consoleNotification,
  emailNotification,
  phoneNotification,
]

function ProgressNotification(
  _message: string,
  _type = 'Console',
  _notifications: INotification[] = Notifications,
) {
  // _notifications: INotification[] = Notifications;
  // _message: string;
  // _type: string;

  // constructor(message: string, type: string) {
  //   this._message = message;
  //   this._type = type;
  // }

  // sendNot() {
    _notifications.forEach((not) => {
      if (not.type === _type) {
        return not.send(_message);
      }
    })
  }
// }

// const console = new ProgressNotification('deu ruim mano', 'Console');
// const phone = new ProgressNotification('deu ruim mano', 'Phone');
// console.sendNot();
// phone.sendNot();
ProgressNotification('deu ruim mano', 'Console');