type Book = {
  book: string;
  author: string;
  genre: string;
}

class WishList {
  private wishlist: Book[] = [];

  addToWishlist(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }
}

export default WishList;