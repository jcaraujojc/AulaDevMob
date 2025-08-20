import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { Alert } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rendaBruta: '',
      aliquota: 0,
      parcela: 0,
      imposto: 0,
    };

    this.calcular = this.calcular.bind(this);
    this.zerar = this.zerar.bind(this);
  }

  calcular() {
    const renda = parseFloat(this.state.rendaBruta.replace(',', '.'));

    if (isNaN(renda)) return;

    let aliquota = 0;
    let parcela = 0;

    if (renda <= 1400) {
      Alert.alert("Isento", "Sua renda está isenta de imposto.");
    } else if (renda <= 2100) {
      aliquota = 0.10;
      parcela = 100;
    } else if (renda <= 2800) {
      aliquota = 0.15;
      parcela = 270;
    } else if (renda <= 3600) {
      aliquota = 0.25;
      parcela = 500;
    } else {
      aliquota = 0.30;
      parcela = 700;
    }

    const imposto = renda * aliquota - parcela;

    this.setState({
      aliquota: aliquota * 100,
      parcela: parcela,
      imposto: imposto > 0 ? imposto : 0,
    });
  }

  zerar() {
    this.setState({
      rendaBruta: '',
      aliquota: 0,
      parcela: 0,
      imposto: 0,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: 'https://lh3.googleusercontent.com/proxy/RxUj_tq2U_o2_GkMaC_PVoSMtx887trONEB8K-bX1LT1NInO-ARfylZaSoPtugRVVCgmtJtGuwkbpZzUuahqaQh0xt4Lguc' }} style={styles.image} />

        <Text style={styles.title}>Cálculo de Imposto</Text>

        <TextInput
          style={styles.input}
          placeholder="Informe sua renda bruta mensal"
          keyboardType="numeric"
          value={this.state.rendaBruta}
          onChangeText={(texto) => this.setState({ rendaBruta: texto })}
        />

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.calcular}>
            <Text style={styles.btnText}>CALCULAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.zerar}>
            <Text style={styles.btnText}>LIMPAR</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.result}>Alíquota: {this.state.aliquota}%</Text>
        <Text style={styles.result}>Parcela a deduzir: R$ {this.state.parcela.toFixed(2)}</Text>
        <Text style={styles.resultImposto}>Imposto a pagar: R$ {this.state.imposto.toFixed(2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 30,
    borderRadius: 60,
    elevation: 25
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#333',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    fontSize: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  btnArea: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  btn: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  result: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  resultImposto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 15,
  },
});
