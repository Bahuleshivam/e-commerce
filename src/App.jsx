import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom"
import { UserAuthContextProvider } from './components/context/UserAuthContext'
import ProtectedRoute from './components/ProtectedRoute'

import Main from './components/Main/Main'
import Cart from './components/Cart/Cart'
import Login from './components/Login/Login'
import Signup from './components/SignUp/Signup'
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact'
import Profile from './components/Profile';
import ProductList from './components/Product/ProductList'


function App() {

  return (
    <>

      <UserAuthContextProvider >
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Main />}></Route>
          <Route exact path='/ProductList' element={<ProductList />}></Route>
          <Route exact path='/Cart' element={<ProtectedRoute> <Cart /> </ProtectedRoute>}></Route>
          <Route exact path='/Contact' element={<Contact />}></Route>
          <Route exact path='/Login' element={<Login />} ></Route>
          <Route exact path='/Signup' element={<Signup />} ></Route>
          <Route exact path='/Profile' element={<Profile />} ></Route>
        </Routes>


      </UserAuthContextProvider>
    </>
  )
}

export default App
