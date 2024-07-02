import Destination from "./components/Destination/Destination"
import Home from "./components/Home/Home"
import Crew from "./components/Crew/Crew"
import Technology from "./components/Technology/Technology"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar/nav"



const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'destination',
      element: <Destination />
    },
    {
      path: 'crew',
      element: <Crew />
    },
    {
      path: 'technology',
      element: <Technology />
    },



  ])

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
