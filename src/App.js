
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './components/Routes/Routes/Routes';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
