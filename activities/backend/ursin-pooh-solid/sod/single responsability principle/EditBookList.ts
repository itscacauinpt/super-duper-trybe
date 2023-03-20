type Book = {
  book: string;
  author: string;
  genre: string;
}

export default class BookList {
  private wishList: Book[];

  constructor(book: Book) {
    this.wishList = [];
    this.wishList.push(book);
  }

  addToWishlist(book: Book): void {
    this.wishList.push(book);
  }

  showWishlist(): void {
    console.log(this.wishList);
  }
}

// const meh = new BookList({
//   book: 'meh',
//   author: 'meh',
//   genre: 'mehh'
// });