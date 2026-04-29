import { Layout } from './components/layout/Layout';
import Hero from './components/ui/Hero';
import './index.css';

import About from './pages/About';
import Skills from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';


function App() {


  return (
    <div className="bg-[#030712] text-white">
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact/>
      </Layout>
    </div>
  );
}

export default App
