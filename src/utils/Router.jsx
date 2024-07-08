import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Signup from '../components/Signup/Signup';
import Login from '../components/Login/Login';
import ForgetPasword from '../components/ForgetPassword/ForgetPassword';
import AddEmployee from '../components/AddEmployee/AddEmployee';
import ViewEmployees from '../components/ViewEmployees/ViewEmployees';
import Department from '../components/Department/Department';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/employee",
        element: <AddEmployee />,
      },
      {
        path: "/employee/:id",
          element: <AddEmployee />,
        
      },
      {
        path: "/employees",
          element: <ViewEmployees />,
        
      },
      {
        path: "/department",
          element: <Department />,
        
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/forget-password",
    element: <ForgetPasword />,
  },
]);

export default router;