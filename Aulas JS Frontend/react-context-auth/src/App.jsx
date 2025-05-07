import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

//pages
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Login from './pages/Login'

//context
import { AuthProvider } from './contexts/AuthContext'

function App() {
  
  return (
    <>
      <AuthProvider>
       <Router>
          <Routes>
                <Route path='/login' element={<Login />}/>
                <Route path='/' element={
                  <PrivateRoute>
                      
                      <Home />

                  </PrivateRoute>
                }/>

             <Route path='/' element={<Navigate to='/login'/>}  />
          </Routes>
       
       
       </Router>
       </AuthProvider>
    </>
  )
}

export default App
