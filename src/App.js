import Header from './components/header/header.jsx';
import Promo from './components/main/promo/promo.jsx';
import Brands from './components/main/brands/brands.jsx';
import Arrivals from './components/main/arrivals/arrivals.jsx';
function App() {
  return (
    <div className="App">
      <Header />
      <Promo /> 
      <Brands />
      <Arrivals />
    </div>
  );
}

export default App;
