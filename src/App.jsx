import './App.css'
import About from './components/about/About'
import ContactUs from './components/contactUs/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/home/Home'
import Services from './components/services/Services'

function App() {

  return (
    <>
      <Header/>
      <Home />
      <About />
      {/* <Services /> */}
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
