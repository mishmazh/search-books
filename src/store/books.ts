import axios from "axios";
import { makeAutoObservable } from "mobx";

class Books {
  state: any = {
    bookList: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  async fetchBooks() {
    const data = await axios
      .get("https://www.googleapis.com/books/v1/volumes?q=react")
      .then((res) => res.data);

    this.state.bookList = data.items;
    // this.state.bookList = [{ value: "test" }, { value: "test-2" }];
    // this.state.bookList = [
    //   { volumeInfo: { categories: ["Computers"] } },
    //   { volumeInfo: { categories: ["ahaha"] } },
    // ];
    console.log(this.state.bookList);
  }
}

export default new Books();
