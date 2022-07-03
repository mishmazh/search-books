export interface IBookItem {
  id: string;
  volumeInfo: {
    authors: string[];
    categories: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
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
