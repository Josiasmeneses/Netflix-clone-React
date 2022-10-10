import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';

import categories from './Api';


function App() {
  return (
    <div className="App">
  
    <Nav/>
    <Banner/>
    {categories.map((category) => {
      return (
              <Row 
                key={category.name} 
                title={category.title} 
                path={category.path}
                isLarge={category.isLarge}
            />
      );
    })}
    </div>
  );
}

export default App;
