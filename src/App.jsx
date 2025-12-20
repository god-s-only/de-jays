import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header, PageNotFound } from './components';
import { Home, RoomDetails, About, Restaurant, Contact } from './pages';

const App = () => {
  return (
    <main className=''>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/room/:id'} element={<RoomDetails />} />
          <Route path={'/about'} element={<About />} /> {/* Add */}
          <Route path={'/restaurant'} element={<Restaurant />} /> {/* Add */}
          <Route path={'/contact'} element={<Contact />} /> {/* Add */}
          <Route path={'*'} element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}

export default App