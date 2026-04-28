import { Layout } from './components/layout/Layout';
import Hero from './components/ui/Hero';

import About from './pages/About';
import Skills from './pages/Skills';
import { Projects } from './pages/Projects';


function App() {


  return (
    <div className="bg-[#030712] text-white">
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </Layout>
    </div>
  );
}

export default App
