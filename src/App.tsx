import './App.css'
import Navbar from './components/NavBar'
import Hero from './components/Hero';
import ProductViewer from './components/ProductViewer';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductViewer />
    </>
  )
}

export default App;
