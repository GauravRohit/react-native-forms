import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import HelloForm from './components/HelloForm';
import SimpleForm from './components/SimpleForm';
import ValidationForm from './components/ValidationForm';

const rootReducer = combineReducers({
  form: formReducer,
});
const store = createStore(rootReducer);

export default class App extends React.Component {
  state = {
    activeForm: 'hello',
  };

  render() {
    const { activeForm } = this.state;
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Button title="Hello Form" onPress={this.handlePressHello} />
          <Button title="Simple Form" onPress={this.handlePressSimple} />
          <Button title="ValidationForm" onPress={this.handlePressValidation} />
          {activeForm === 'hello' && <HelloForm />}
          {activeForm === 'simple' && <SimpleForm />}
          {activeForm === 'validation' && <ValidationForm />}
        </View>
      </Provider>
    );
  }

  handlePressHello = () => this.setState({ activeForm: 'hello' });

  handlePressSimple = () => this.setState({ activeForm: 'simple' });

  handlePressValidation = () => this.setState({ activeForm: 'validation' });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
