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
        <Text style={styles.title}>
          Cartão De Perfil De Usuário
        </Text>

        <View style={styles.hr} />

        <Text style={styles.text}>
          <Text style={styles.label}>Nome:</Text> {nome}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Profissão:</Text> {profissao}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Descrição:</Text> {descricao}
        </Text>
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
    padding: 50,
    borderRadius: 30,
    width: '80%',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 25,
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
    alignSelf: 'center'
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
    color: 'black',
  },
  label: {
    fontWeight: 'bold',
  }
});

export default App;
