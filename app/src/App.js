import { height } from '@mui/system';
import './App.css';
import Appbar from './components/appbar/AppbarComponent'
import Card from './components/card/CardComponent'

function App() {
  return(
    <div style={{backgroundColor: '#bcf4de', height: '100vh'}}>
      <Appbar />
      <Card />
    </div>
  );
}

export default App;
