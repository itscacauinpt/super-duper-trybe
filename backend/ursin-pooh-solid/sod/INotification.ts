export default interface INotification {
  _message: string;
  sendNotification(message: string): void;
}