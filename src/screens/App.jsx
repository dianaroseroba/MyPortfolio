import { Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe';
import Experiences from './Experiences';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Home from './../components/Home';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
function App() {
  return (
    <main className='grid grid-rows h-screen w-auto font-roboto'>
      <Header />
      <section className='grid md:grid-cols-[1fr_auto] grid-rows-[1fr_auto] md:justify h-full'>
        <section className='bg-personalBlue-150 flex items-center justify-center w-full'>
        <section className='bg-gradient-to-b from-personalBlue-100 to-personalBlue-150 w-full h-auto md:h-auto md:mx-20 mx-4 rounded-2xl my-10 '>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/AboutMe' element={<AboutMe />} />
              <Route path='/Experiences' element={<Experiences />} />
              <Route path='/Skills' element={<Skills />} />
              <Route path='/Projects' element={<Projects />} />
              <Route path='/ContactMe' element={<ContactMe />} />
            </Routes>
          </section>
        </section>
        <section className='bg-personalBlue-150 h-full py-8 self-center'>
          <Navbar />
        </section>
      </section>
    </main>
  );
}

export default App;
