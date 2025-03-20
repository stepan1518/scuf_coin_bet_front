import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import TopEvents from "./components/TopEvents.jsx";
import PopularEvents from "./components/PopularEvents.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Banner />
      <TopEvents />
      <PopularEvents />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App
