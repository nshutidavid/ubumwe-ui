

import HomePage from "./routes/homePage/homePage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/Layout";
import SinglePage from "./routes/singlePage/singlePage";
import Login from "./routes/login/login";
import ProfilePage from "./routes/profilePage/profilePage";
import Register from "./routes/register/rRegister";
import About from "./routes/about/about";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/about",
          element:<About />
        },
        {
          path:"/contact",
          element:<ProfilePage />
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    }
  ]);

  return (

    <RouterProvider router={router}/>
  );
}

export default App