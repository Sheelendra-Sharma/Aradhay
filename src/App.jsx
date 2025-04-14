import './App.css'
import About from './components/about/About'
import ContactUs from './components/contactUs/ContactUs'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/home/Home'
import Gallery from './components/Gallary/Gallary'
import Services from './components/services/Services'

function App() {

  return (
    <>
      <Header/>
      <Home />
      <About />
      <Gallery /> 
      {/* <Services /> */}
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
