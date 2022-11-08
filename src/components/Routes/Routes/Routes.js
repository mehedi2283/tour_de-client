import ServiceDetails from '../../ServiceDetails/ServiceDetails';
import Main from './../../../layout/Main';
import Home from './../../Home/Home';
import Login from './../../Login/Login/Login';
import Register from './../../Login/Register/Register';
import Services from './../../Services/Services';



const { createBrowserRouter, Link } = require("react-router-dom");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: "/details/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
      },

    ]
}
])