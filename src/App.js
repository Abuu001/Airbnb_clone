import Home from "./Home/Home"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import './App.css';

function App() {
  return (
    <div className="App"> 
      <header>
        <Header />
      </header>
      
      <main>
        <Home />
      </main>
 
    <footer>
      <Footer />
    </footer>
    </div>
  );
}

export default App;
