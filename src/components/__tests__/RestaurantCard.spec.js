import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";
import { render, screen } from "@testing-library/react";
it("should render RestaurantCard component with props data ", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Meridian Restaurant");

  expect(name).toBeInTheDocument();
  expect(screen.getByText("Meridian Restaurant")).toBeInTheDocument();
});
