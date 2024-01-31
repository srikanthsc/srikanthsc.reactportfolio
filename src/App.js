import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
function App() {
  return (
    <>
      <Routes>
        <Route path="srikanthsc.reactportfolio/" element={<Layout />}>
        <Route index="srikanthsc.reactportfolio/Home" element={<Home />} />
        <Route path="srikanthsc.reactportfolio/about" element={<About />} />
        <Route path="srikanthsc.reactportfolio/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
