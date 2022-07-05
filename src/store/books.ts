import { makeAutoObservable, runInAction } from "mobx";
import { IBookItem, IBooks, IBooksResponse } from "./types";
import { booksApi } from "../api/api";

class Books {
  state: IBooks = {
    bookList: [],
    bookItem: {} as IBookItem,
    totalBooksCount: 0,
    pageIndex: 0,
    maxResults: 30,
    bookId: "",
    searchValue: "",
    categoriesValue: "",
    sortingValue: "",
    isLoading: false,
    errorMsg: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  async fetchBooks(search: string, categories: string, sorting: string) {
    this.clearBooks();

    runInAction(() => {
      this.state.isLoading = true;
    });

    const data: IBooksResponse = await booksApi
      .fetchBooks(search, categories, sorting, this.state.maxResults)
      .then((res) => res.data)
      .catch((err) => {
        runInAction(() => {
          if (err.response.status === 400) {
            this.state.errorMsg = "The field should not be empty.";
          } else {
            this.state.errorMsg = err.message;
          }
          this.state.isLoading = false;
        });
      });

    runInAction(() => {
      if (data.totalItems !== 0) {
        this.state.bookList = data.items;
        this.state.totalBooksCount = data.totalItems;

        this.state.searchValue = search;
        this.state.categoriesValue = categories;
        this.state.sortingValue = sorting;
      } else {
        this.state.errorMsg = "Nothing found";
      }

      this.state.isLoading = false;
    });
  }

  async loadMoreBooks() {
    runInAction(() => {
      this.state.isLoading = true;
      this.state.pageIndex += 30;
    });

    const data: IBooksResponse = await booksApi
      .loadMoreBooks(
        this.state.searchValue,
        this.state.categoriesValue,
        this.state.sortingValue,
        this.state.maxResults,
        this.state.pageIndex
      )
      .then((res) => res.data)
      .catch((err) => {
        runInAction(() => {
          this.state.errorMsg = err.message;
          this.state.isLoading = false;
        });
      });

    runInAction(() => {
      this.state.bookList = [...this.state.bookList, ...data.items];
      this.state.totalBooksCount = data.totalItems;

      this.state.isLoading = false;
    });
  }

  async openSpecificBook(bookId: string) {
    runInAction(() => {
      this.state.isLoading = true;
    });

    const data: IBookItem = await booksApi
      .openSpecificBook(bookId)
      .then((res) => res.data)
      .catch((err) => {
        runInAction(() => {
          this.state.errorMsg = err.message;
          this.state.isLoading = false;
        });
      });

    runInAction(() => {
      this.state.bookItem = data;
      this.state.bookId = bookId;

      this.state.isLoading = false;
    });
  }

  clearBooks() {
    runInAction(() => {
      this.state.bookList = [];
      this.state.totalBooksCount = 0;
      this.state.pageIndex = 0;
      this.state.errorMsg = "";
    });
  }
}

export default new Books();
