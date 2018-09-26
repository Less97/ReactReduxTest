import * as React from 'react';
import './App.css';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

const store = createStore<StoreState,any,{},{}>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

class App extends React.Component {
  public render() {
    return (<div>
    <Provider store={store}>
      <Hello/>
    </Provider>
      </div>
    );
  }
}

export default App;
