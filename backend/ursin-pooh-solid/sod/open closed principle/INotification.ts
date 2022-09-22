export default interface INotification {
  type: string,
  send: (message: string) => void
};