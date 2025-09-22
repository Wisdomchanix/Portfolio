import { Routes, Route } from 'react-router-dom';
import Hero from './Hero'
import Moreprojects from './Moreprojects';
import UnderMaintenance from './Undermaintenance';

function App() {

  return (
    
    <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path="/more-projects" element={<Moreprojects />} /> 
      <Route path="/under-maintenance" element={<UnderMaintenance />} /> 
    </Routes>
  )
}

export default App

//  <Loader />
//       <main className='main'
//         <Hero />
//       </main>
//       <Scrollup />