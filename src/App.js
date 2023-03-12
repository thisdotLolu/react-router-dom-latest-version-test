import {createBrowserRouter, Route,createRoutesFromElements, RouterProvider} from 'react-router-dom'
import CareersLayout from './layouts/CareersLayout';
import HelpLayout from './layouts/HelpLayout';
import RootLayout from './layouts/RootLayout';
import About from './pages/About';
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails';
import Careers, { careersLoader } from './pages/careers/Careers';
import CareersError from './pages/careers/CareersError';
import Contact from './pages/help/Contact';
import Faq from './pages/help/Faq';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='help' element={<HelpLayout/>}>
          <Route path='faq' element={<Faq/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
        
        <Route path='/careers' element={<CareersLayout/>}>
          <Route 
          index 
          element={<Careers/>}
          loader ={careersLoader}
          errorElement={<CareersError/>}
          />
          <Route
          path=":id"
          element={<CareerDetails/>}
          loader={careerDetailsLoader}
          errorElement={<CareersError/>}
          />
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
    </Route>
  )
)
function App() {
  return (
    <>    
    <main>
      <RouterProvider router={router}/>
    </main>
    </>
    
  );
}

export default App
