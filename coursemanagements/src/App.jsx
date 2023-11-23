import './App.css'
import { Routes, Route } from 'react-router-dom' 
import Header from './components/header'
import Home from './pages/home'
import { BackToTopButton } from './components/backToTopButton'

function App() {

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' >
          <Route path='' element={<Home/>} />
        </Route>
      </Routes>
      <BackToTopButton />
    </div>
  )
}

export default App
