import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes/",
  params: {
    key: "AIzaSyCfTp7Dpbdb4PLgpANt7y-1XsSxDHV3ELc",
  },
});

export const booksApi = {
  fetchBooks(
    search: string,
    categories: string,
    sorting: string,
    maxResults: number
  ) {
    return instance.get(
      `?q=${search}${categories}&orderBy=${sorting}&maxResults=${maxResults}`
    );
  },
  loadMoreBooks(
    search: string,
    categories: string,
    sorting: string,
    maxResults: number,
    pageIndex: number
  ) {
    return instance.get(
      `?q=${search}${categories}&orderBy=${sorting}&maxResults=${maxResults}&startIndex=${pageIndex}`
    );
  },
  openSpecificBook(bookId: string) {
    return instance.get(`${bookId}`);
  },
};
