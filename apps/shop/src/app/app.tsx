import { Routes, Route, Link } from 'react-router-dom';
import { Home } from '../home/home';
import { Item } from '../item/item';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<Item />} />
      </Routes>
      <nav>
        <Link to="item">Shop Item</Link>
      </nav>
    </>
  );
}

export default App;
