import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useSearchParams,
} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import { useEffect } from "react/cjs/react.production.min";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

/***
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -RestaurantContainer
 *  -RestaurantCard
 *      -Img
 *      -Name of res,Star Rating,Cusine,Delivery time
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 *
 */

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Vamsi Krishna",
    };

    setUserName(data.name);
  }, []);
  return (
    <div className="app">
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />,
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
