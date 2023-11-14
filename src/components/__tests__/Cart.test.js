import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
it("should render the restaurant menu component ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Biryani (12)");
  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItem");

  expect(foodItems.length).toBe(12);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  expect(addBtns.length).toBe(12);

  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart(1 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItem").length).toBe(13);
});
