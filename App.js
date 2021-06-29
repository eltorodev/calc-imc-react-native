import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mass: 0,
      height: 0,
      result: 0,
      danger: true,
      resultText: '',
    }
    this.calc = this.calc.bind(this)
  }

  calc() {
    let imc = this.state.mass / (this.state.height * this.state.height)
    let state = this.state

    state.result = imc

    if (state.result < 16) {
      state.danger = true
      state.resultText = 'Magreza grave'
    } else if (state.result < 17) {
      state.danger = true
      state.resultText = 'Magreza moderada'
    } else if (state.result < 18.5) {
      state.danger = true
      state.resultText = 'Magreza leve'
    } else if (state.result < 25) {
      state.danger = false
      state.resultText = 'Saudável'
    } else if (state.result < 30) {
      state.danger = true
      state.resultText = 'Sobrepeso'
    } else if (state.result < 35) {
      state.danger = true
      state.resultText = 'Obesidade grau I'
    } else if (state.result < 40) {
      state.danger = true
      state.resultText = 'Obesidade grau II'
    } else {
      state.danger = true
      state.resultText = 'Obesidade grau III'
    }

    this.setState(state)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entry}>
          <TextInput
            placeholder="0"
            keyboardType="numeric"
            autoCapitalize= "none"
            style={styles.input}
            onChangeText={(mass) => {this.setState({mass})}}
            />
          <TextInput
            placeholder="0.00"
            keyboardType="numeric"
            autoCapitalize= "none"
            style={styles.input}
            onChangeText={(height) => {this.setState({height})}}
            />
        </View>
        <TouchableOpacity onPress={this.calc} style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.result}>
          {this.state.result.toFixed(2)}
        </Text>
        <Text style={[styles.result, {fontSize: 35, color: (this.state.danger ? '#CD113B' : '#66DE93')}]}>
          {isNaN(this.state.result) ? '' : this.state.resultText}
        </Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#52006A',
  },

  entry: {
    flexDirection: 'row',
  },

  input: {
    width: '50%',
    height: 80,
    marginTop: 24,
    textAlign: 'center',
    fontSize: 50,
    color: '#EFEFEF',
  },
  
  button: {
    width: '90%',
    backgroundColor: '#CD113B',
    color: '#EFEFEF'
  },

  buttonText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#EFEFEF'
  },

  result: {
    alignSelf: 'center',
    color: '#FFA900',
    fontSize: 65,
    padding: 15,
  },
});
