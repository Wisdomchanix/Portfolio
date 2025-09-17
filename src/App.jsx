import { Routes, Route } from 'react-router-dom';
import Hero from './Hero'
import Moreprojects from './Moreprojects';

function App() {

  return (
    
    <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path="/more-projects" element={<Moreprojects />} /> 
    </Routes>
  )
}

export default App

//  <Loader />
//       <main className='main'>
//         <Hero />
//       </main>
//       <Scrollup />