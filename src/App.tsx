import './App.css'
import Navbar from './components/NavBar'
import Hero from './components/Hero';
import ProductViewer from './components/ProductViewer';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Showcase from './components/Showcase';

gsap.registerPlugin(ScrollTrigger)


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </>
  )
}

export default App;
