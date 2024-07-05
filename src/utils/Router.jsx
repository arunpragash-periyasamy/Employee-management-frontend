import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Signup from '../components/Signup/Signup';
import Login from '../components/Login/Login';
import ForgetPasword from '../components/ForgetPassword/ForgetPassword';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/signup",
        element: <Signup/>
    },
    {
        path: "/signin",
        element: <Login/>
    }, {
        path: "/forget-password",
        element: <ForgetPasword/>
    }
])

export default router;