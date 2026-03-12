import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import CursorGlow from './components/common/CursorGlow';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-bg-primary font-inter overflow-hidden">
        <CursorGlow />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cases" element={<Products />} />
            <Route path="/airpods" element={<Products />} />
            <Route path="/watch-straps" element={<Products />} />
            <Route path="/accessories" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
