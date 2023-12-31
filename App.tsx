import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import store from './src/redux/store';
import Router from './src/router';
import FlashMessage from 'react-native-flash-message';
import Loading from './src/component/molecules/Loading';

const MainApp = () => {
  // variabel untuk loading
  const {isLoading} = useSelector((state: any) => state.globalReducer);
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default App;
