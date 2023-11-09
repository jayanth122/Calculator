import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classname="calculator-grid">
      <div classname="output">
        <div classname="previous-operand"></div>
        <div classname="current-operand"></div>
      </div>
      <button classname="span-two">AC</button>
      <button>DEL</button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button classname="span-two">=</button>
    </div>
  );
}

export default App;
