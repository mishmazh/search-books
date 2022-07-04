export interface IBookItem {
  id: string;
  volumeInfo: {
    authors: string[];
    categories: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
      extraLarge: string;
    };
    title: string;
  };
}

export interface IBooks {
  bookList: IBookItem[];
  bookItem: IBookItem;
  totalBooksCount: number;
  pageIndex: number;
  maxResults: number;
  bookId: string;
  searchValue: string;
  categoriesValue: string;
  sortingValue: string;
  isLoading: boolean;
  error: string;
}

export interface IBooksResponse {
  items: [];
  totalItems: number;
}
