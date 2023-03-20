// // ReadingTracker.ts
// type Book = {
//   book: string;
//   author: string;
//   genre: string;
// }

// class ReadingTracker {
//   private readingGoal: number;
//   private booksRead: number;
//   private wishlist: Book[];

//   constructor(readingGoal: number) {
//     this.readingGoal = readingGoal;
//     this.booksRead = 0;
//     this.wishlist = [];
//   }

//   // reading tracker
//   trackReadings(readsCount: number): void {
//     this.booksRead += readsCount;

//     if (this.booksRead >= this.readingGoal) {
//       this.progressNotification(
//         'Congratulations! You\'ve reached your reading goal!',
//       );
//       return;
//     }
//     this.progressNotification(
//       'There are still some books to go!',
//     );
//   }

//   // funções para editar na lista
//   addToWishlist(book: Book): void { // função 1: adicionar a lista
//     this.wishlist.push(book);
//   }

//   showWishlist(): void { // função 2: mostrar a lista em si
//     console.log(this.wishlist);
//   }

//   // reading tracker
//   progressNotification(message: string): void { // função 3: notifcaçao de progresso
//     console.log(message);
//   }
// }

// const readTracker = new ReadingTracker(20);

// readTracker.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });

// readTracker.showWishlist();

// readTracker.trackReadings(12);
// readTracker.trackReadings(9);