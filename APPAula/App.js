import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Expo-friendly icons

class App extends Component {
  render() {
    return (
      <View style={styles.container}> 

        <Image 
          source={{ uri: 'https://lh3.googleusercontent.com/proxy/RxUj_tq2U_o2_GkMaC_PVoSMtx887trONEB8K-bX1LT1NInO-ARfylZaSoPtugRVVCgmtJtGuwkbpZzUuahqaQh0xt4Lguc' }} 
          style={styles.avatar} 
        />

        <UserProfile 
          nome="João Carlos" 
          profissao="Programador, Analista" 
          descricao="Formado em 12/2025"
          rendaBruta={0}
          aliquota={0}
          parcela={0}
          renda={0} 
        />

        <StatusBar style="dark" />
      </View>
    );
  }
}

class UserProfile extends Component {
  render() {
    const { nome, profissao, descricao, rendaBruta, aliquota, parcela, renda } = this.props;

    return (
      <View style={styles.card}>
        <Text style={styles.title}>Perfil do Usuário</Text>

        <View style={styles.separator} />

        <Text style={styles.info}>
          <Text style={styles.label}>Nome: </Text>{nome}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.label}>Profissão: </Text>{profissao}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.label}>Descrição: </Text>{descricao}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.label}>Renda Bruta Mensal: </Text>
          R$ {rendaBruta.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.label}>Aliquota: </Text>{aliquota}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.label}>Parcela: </Text>{parcela}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.label}>Renda Bruta: </Text>{renda}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 80,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: 'white',
    backgroundColor: '#ddd',
    elevation: 25,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 15,
    width: '100%',
    maxWidth: 350,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 15,
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#cccccc',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 10,
  },
  label: {
    fontWeight: '600',
    color: '#000000',
  },
  icon: {
    marginTop: 25,
  },
});

export default App;
