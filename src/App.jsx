import './App.css';
// import App from './App.jsx';
import Info from './components/Info';
import Data from './components/Data';
function App() {
  return (
    <div className={'wrapper'}>
      <div className={'main'}>
        <div className={'container'}>
          <div className={'row'}>
            <Info />
            <Data />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
