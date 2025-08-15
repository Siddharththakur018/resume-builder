import { Routes, Route} from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Pricing from '../pages/Pricing'
import Products from '../pages/Products'
import ResumeBuilder from '../pages/ResumeBuilder'
import Resume from '../pages/Resume'
import ResumeEditor from '../pages/ResumeEditor'

function AllRoutes() {
  return (
    <>  
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/products' element={<Products />} />
                <Route path='/resume-builder' element={<ResumeBuilder />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/resume-editor' element={<ResumeEditor/>} />
            </Routes>

    </>
  )
}

export default AllRoutes