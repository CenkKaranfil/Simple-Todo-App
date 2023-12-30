import { StyleSheet } from 'react-native';
import * as React from 'react';
import HomeScreen from './Components/HomeScreen';
import { store } from './redux/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
    <HomeScreen/>
    </Provider>
  );
}

export default App; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
});
