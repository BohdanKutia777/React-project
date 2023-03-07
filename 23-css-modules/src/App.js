import './App.css';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Info />
      <div className="info">
        <h1>App component</h1>
        <button className="my-button">App component button</button>
        <h2>
        Heading in the Info component
        </h2>
      </div>
    </div>
  );
}
export default App;
