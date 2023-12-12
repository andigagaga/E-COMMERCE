import Molecules from './src/component/molecules';
import Pages from './src/pages';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';

function App() {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}

export default App;
