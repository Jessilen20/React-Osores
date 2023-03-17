import './App.css';
import PersonCard from './componente/Persona';

function App() {
  return (
    <div className="App">
      <PersonCard lastname="Doe" name="Jane" age={45} colorHair="Black" />
      <PersonCard lastname="Smith" name="John" age={88} colorHair="Brown" />
      <PersonCard lastname="Fillmore" name="Millard" age={50} colorHair="Brown" />
      <PersonCard lastname="Smith" name="Maria" age={62} colorHair="Brown" />
    </div>
  );
}

export default App;
