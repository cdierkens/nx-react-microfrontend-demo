import React from 'react';

// eslint-disable-next-line
// @ts-ignore
const ShopService = React.lazy(() => import('mfShop/ShopService'));

export function App() {
  return (
    <header className="flex">
      <h1>Welcome to app-shell!</h1>

      <React.Suspense fallback="Loading ShopService">
        <ShopService />
      </React.Suspense>
    </header>
  );
}

export default App;
