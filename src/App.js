import Header from './components/header/header.jsx';
import Promo from './components/main/promo/promo.jsx';
import Brands from './components/main/brands/brands.jsx';
import Arrivals from './components/main/arrivals/arrivals.jsx';
import Sale from './components/main/sale/sale.jsx';
import Favourite from './components/main/Favourite/favourite.jsx';
import Download from './components/main/download/download.jsx';
function App() {
  return (
    <div className="App">
      <Header />
      <Promo /> 
      <Brands />
      <Arrivals />
      <Sale />
      <Favourite />
      <Download />
    </div>
  );
}

export default App;
