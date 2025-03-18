import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import { Home, About, Products } from "./pages";
import MainLayout from "./layouts/MainLayout";
import "./App.css"
import { useState } from "react";
function App() {
  const { data, error, isPending } = useFetch("https://dummyjson.com/products");
  const [getProduct, setGetProduct] = useState(null)
  if (error) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-red-500 text-2xl">{error}</h2>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-gray-500 text-2xl">Loading...</h2>
      </div>
    );
  }

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home data={data} getProduct={getProduct} setGetProduct={setGetProduct} />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products/:id",
          element: <Products getProduct={getProduct} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
