import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}> 
        <UserProfile 
          nome="João Araújo" 
          profissao="Desenvolvedor Junior" 
          descricao="Formado em 12/2025" 
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

class UserProfile extends Component {
  render() {
    const { nome, profissao, descricao } = this.props;

    return (
      <View style={styles.card}>
         <Text style={{ fontSize: 25, color: 'black', marginBottom: 80, textAlign: 'center' }}>
          Cartão De Perfil De Usuário
        </Text>
        <Text style={styles.text}>Nome: {nome}</Text>
        <Text style={styles.text}>Profissão: {profissao}</Text>
        <Text style={styles.text}>Descrição: {descricao}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#9ca9f5ff',
    padding: 20,
    borderRadius: 30,
    width: '80%',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
    color: 'black',
  },
});

export default App;
