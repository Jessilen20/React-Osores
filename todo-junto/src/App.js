import './App.css';
import Persona from './componente/Persona';

function App() {
  return (
    <div className="App">
      <Persona lastname="Doe" name="Jane" age={45} colorHair="Black" />
      <Persona lastname="Smith" name="John" age={88} colorHair="Brown" /> 
    </div>
  );
}

export default App;
