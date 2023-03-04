import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Shop from './components/Shop/Shop';
import Main from './layout/Main';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import { productAndCartLoader } from './loader/productAndCartLoader';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>
        },
        {
          path: "/Orders",
          loader: productAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: "/Inventory",
          element: <Inventory></Inventory>
        },
        {
          path: "/About",
          element: <About></About>
        },
        {
          path: "*",
          element: <NotFound></NotFound>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
