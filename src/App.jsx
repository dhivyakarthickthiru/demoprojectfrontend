import { createBrowserRouter,RouterProvider } from "react-router"


const router=createBrowserRouter([
  {
    path:"/",
    element:<Home />
  }
]);

const App = () => {
  return  <RouterProvider router={router} />;
  
}
export default App;