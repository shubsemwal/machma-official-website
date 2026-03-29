import './App.css'
import ExpoSection from './components/ExpoSection'
import Footer from './components/Footer'
import MachmaAbout from './components/MachmaAbout'
import MachmaHero from './components/MachmaHero'
import Promotion from './components/Promotion'
import FocusUs from './components/FocusUs'
import Gallery from './components/Gallery'
import MachmaReport from './components/MachmaReport'
import MachmaWhyJoin from './components/MachmaWhyJoin'
import MachmaVisitorProfile from './components/MachmaVisitorProfile'
import MachmaInvitation from './components/MachmaInvitation'
import MachmaSponsors from './components/MachmaSponsors'
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import BookNow from "./components/BookNow";

function App() {
  return (
    <>
     <Navbar />
    <Routes>
      <Route path="/book-now" element={<BookNow />} />
     <Route path="/" element={
    <>
      <MachmaHero />
      <MachmaAbout />
      <MachmaReport />
      <MachmaWhyJoin />
      <MachmaVisitorProfile />
      <MachmaSponsors />
      <ExpoSection />
      <MachmaInvitation />
    </>
  } />
     <Route path="/about" element={<MachmaAbout />} />
  <Route path="/focus-us" element={<FocusUs />} />
  <Route path="/promotion" element={<Promotion />} />
  <Route path="/gallery" element={<Gallery />} />
</Routes>
<Footer />
    </>
  )
}

export default App
