import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from '../home/home';

// eslint-disable-next-line
// @ts-ignore
const ShopApp = React.lazy(() => import('mfShop/app'));

const StyledApp = styled.div`
  a {
    padding: 4px;
  }

  nav,
  main {
    padding: 16px;
  }
`;

export function App() {
  return (
    <StyledApp>
      <nav>
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="shop/*"
            element={
              <React.Suspense fallback={<>...</>}>
                <ShopApp />
              </React.Suspense>
            }
          />
        </Routes>
      </main>
    </StyledApp>
  );
}

export default App;
