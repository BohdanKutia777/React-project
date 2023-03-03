import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="7" hasPet />
      <PetInfo animal="dog" age="2" hasPet={false} />
      <PetInfo animal="parrot" age="12" hasPet />
    </div>
  );
}
export default App;
