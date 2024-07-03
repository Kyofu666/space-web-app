import Destination from "./components/Destination/Destination"
import Home from "./components/Home/Home"
import Crew from "./components/Crew/Crew"
import Technology from "./components/Technology/Technology"
import ErrorPage from "./components/Error/ErrorPage"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      index: true,
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: 'destination',
      element: <Destination />,
      errorElement: <ErrorPage />
    },
    {
      path: 'crew',
      element: <Crew />,
      errorElement: <ErrorPage />
    },
    {
      path: 'technology',
      element: <Technology />,
      errorElement: <ErrorPage />
    },
  ])

  return <RouterProvider router={router} />
}

export default App
