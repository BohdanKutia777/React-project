const App = () => {
  const [buttonText, setButtonText] = React.useState('Click me');
  const [classesList, setClassesList] = React.useState('');
  const onButtonText = () => {
    setButtonText('Hello from React');
    setClassesList('green-btn');
  };
  return (
    <div className="app">
      <button className={classesList} onClick={onButtonText}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
