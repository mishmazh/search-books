import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";

class Books {
  state: any = {
    bookList: [],
    book: {},
    totalBooks: 0,
    page: 0,
    search: "",
    categories: "",
    sorting: "",
    isButton: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  async fetchBooks(
    searchValue: string,
    categoriesValue: string,
    sortingValue: string
  ) {
    this.state.page = 0;

    const data = await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}+subject:${categoriesValue}&orderBy=${sortingValue}&maxResults=30`
      )
      .then((res) => res.data);

    console.log(data);

    runInAction(() => {
      this.state.bookList = data.items;
      this.state.totalBooks = data.totalItems;

      this.state.search = searchValue;
      this.state.categories = categoriesValue;
      this.state.sorting = sortingValue;

      this.state.isButton = true;
    });
  }

  async loadMoreBooks() {
    this.state.page += 30;

    const data = await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}+subject:${this.state.categories}&orderBy=${this.state.sorting}&maxResults=30&startIndex=${this.state.page}`
      )
      .then((res) => res.data);

    runInAction(() => {
      this.state.bookList = [...this.state.bookList, ...data.items];
      this.state.totalBooks = data.totalItems;
    });

    if (this.state.totalBooks < this.state.page + 30)
      this.state.isButton = false;
  }

  async fetchSpecificBook(bookId: string) {
    this.state.book = {};

    const data = await axios
      .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      .then((res) => res.data);

    this.state.book = data;
  }
}

export default new Books();
