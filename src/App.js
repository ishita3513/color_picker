import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  
  const colors = ['aqua', 'blueviolet', 'chocolate','yellow','black','red','blue','aquamarine'];

  return (
    <>
    <ColorPicker colors={colors}/>
    </>
  );
}

export default App;
