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
import Error404 from '../../404/Error404';






const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://tour-de-server-mehedi2283.vercel.app/home')
      },
     
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch('https://tour-de-server-mehedi2283.vercel.app/home')
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
        path: "/my_reviews/",
        element: <SecureRoutes><MyReviews></MyReviews></SecureRoutes>,
      
      },
      {
        path: "/update_review/:id",
        element: <SecureRoutes><UpdateReview></UpdateReview></SecureRoutes>,
        loader: ({params}) => fetch(`https://tour-de-server-mehedi2283.vercel.app/update_review/${params.id}`)
      
      },
      {
        path: "/add_services",
        element: <SecureRoutes><AddServices></AddServices></SecureRoutes>,
      
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch('https://tour-de-server-mehedi2283.vercel.app/services')
      },
      {
        path: "/services/details/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`https://tour-de-server-mehedi2283.vercel.app/details/${params.id}`),
  
      },
      
      
      

    ]
},
{
  path: '*',
  element: <Error404></Error404>
}
])