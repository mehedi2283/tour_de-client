
import { RouterProvider } from 'react-router-dom';
import './App.css';

import { Toaster } from "react-hot-toast";
import { routes } from './components/Routes/Routes/Routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
