import ServiceDetails from '../../ServiceDetails/ServiceDetails';
import Main from './../../../layout/Main';
import Home from './../../Home/Home';
import Login from './../../Login/Login/Login';
import Register from './../../Login/Register/Register';
import Services from './../../Services/Services';
import MyReviews from './../../MyReviews/MyReviews';
import SecureRoutes from './../PrivateRoutes/PrivateRoutes';
import AddServices from '../../AddServices/AddServices';
import UpdateReview from '../../UpdateReview/UpdateReview';
import Blogs from './../../Blogs/Blogs';






const { createBrowserRouter, Link } = require("react-router-dom");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000')
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000')
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
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/my_reviews/:email",
        element: <SecureRoutes><MyReviews></MyReviews></SecureRoutes>,
      
      },
      {
        path: "/update_review/:id",
        element: <SecureRoutes><UpdateReview></UpdateReview></SecureRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/update_review/${params.id}`)
      
      },
      {
        path: "/add_services",
        element: <SecureRoutes><AddServices></AddServices></SecureRoutes>,
      
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: "/details/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`),
  
      },

    ]
}
])