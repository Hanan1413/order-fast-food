import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './ui/Home';
import Menu, {loader as menuLoader} from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
import Error from './ui/Error';




const router = createBrowserRouter([
  {
    element: <AppLayout />,
    
    children: [
        
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/menu',
    element: <Menu />,
    loader: menuLoader,
    errorElement:<Error />,

  }, {
    path: '/cart',
    element: <Cart />
  },
  {
     path: '/order/new',
    element: <CreateOrder />
  },
  {
    path: '/order:orderId',
    element: <Order />
  },
      
    ]
  },

]);

function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
 