import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import NoPage from './Pages/NoPage'
import Register from './Components/App/Register'
import Login from './Components/App/Login'
import UploadPdf from './Pages/UploadPdf'
import Protected from './Components/App/Protected'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Protected Component={Home} />} />
        <Route path='/contact' element={<Protected Component={Contact} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/uploadPdf'
          element={<Protected Component={UploadPdf} />}
        />

        <Route path='*' element={<NoPage />} />
      </Routes>
    </>
  )
}

export default App
