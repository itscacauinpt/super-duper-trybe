import INotification from "./INotification";

export default class ReadingTracker implements INotification {
  _readingGoal: number;
  _booksRead: number;

  _message: string;
  sendNotification(message: string): void {
    console.log(message);
  }

  constructor(readingGoal: number) {
    this._readingGoal= readingGoal;

    this._booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this._booksRead += readsCount;

    if (this._booksRead >= this._readingGoal) {
      return this.sendNotification('é noix na meta');
    } else {
      return this.sendNotification('There are still some books to go!');
    }
  }
}