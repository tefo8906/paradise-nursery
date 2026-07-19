import { Link, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';

function Navbar() {
  const items = useSelector(state => state.cart.items);
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link className="brand" to="/">Paradise Nursery</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link className="cart-link" to="/cart">🛒 Cart <span>{cartCount}</span></Link>
      </div>
    </nav>
  );
}

function LandingPage() {
  return (
    <main className="landing-page">
      <div className="landing-overlay">
        <h1>Paradise Nursery</h1>
        <p>Bring nature home with beautiful plants for every space.</p>
        <Link className="get-started" to="/plants">Get Started</Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}
