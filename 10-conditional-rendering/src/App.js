import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="7" />
      <PetInfo animal="dog" age="2" />
      <PetInfo animal="parrot" age="12" />
    </div>
  );
}
export default App;
