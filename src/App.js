import './App.css';

import Menu from './Components/Menu';
import Search from './Components/Search';
import Browse from './Components/Browse';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>PML Library</p>
      </header>
      <Menu>
        <div label="Collection">
          <Search />
        </div>
        <div label="Browse">
          <Browse />
        </div>
        <div label="About">
          <About />
        </div>
      </Menu>
    </div>
  );
}

export default App;
