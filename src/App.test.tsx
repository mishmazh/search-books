import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import React from "react";

test("renders list of 30 books, click button and renders another 30", async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const searchInput = screen.getByPlaceholderText(/search.../i);
  const searchBtn = screen.getByTestId("search-btn");
  expect(screen.queryByTestId("book-item")).toBeNull();

  expect(screen.getByTestId("search-input")).toContainHTML("");
  fireEvent.input(searchInput, {
    target: { value: "react" },
  });
  expect(screen.getByTestId("search-input")).toContainHTML("react");

  expect(screen.queryByTestId("load-more-btn")).toBeNull();

  fireEvent.click(searchBtn);
  const bookItems = await screen.findAllByTestId("book-item");
  expect(bookItems.length).toBe(30);

  const loadMoreBtn = screen.getByTestId("load-more-btn");
  expect(loadMoreBtn).toBeInTheDocument();
  fireEvent.click(loadMoreBtn);

  const anotherBookItems = await screen.findAllByTestId("book-item");
  expect(anotherBookItems.length).toBe(30);
});
