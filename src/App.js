import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Header from './AJ/Header';
import Footer from './AJ/Footer';

import HOC from './HOC';

import AjDashboard from './AJ/AjDashboard';




function App() {
  return (
    <div className='App'>
      <Header />
      <AjDashboard />
      <Footer />
    </div>

  )
}

export default HOC(App);
