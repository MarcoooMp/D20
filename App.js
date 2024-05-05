import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import rollD20 from './components/d20';

const App = () => {
  const [resultados, setResultados] = useState([]);
  const [resultadoAtual, setResultadoAtual] = useState(null);

  // Função para lidar com o clique no botão
  const handlePress = () => {
    const resultadoDoD20 = rollD20();
    setResultadoAtual(resultadoDoD20);

    // Adiciona o resultado atual ao array de resultados
    setResultados([resultadoDoD20, ...resultados.slice(0, 2)]);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/d20.jpg')}
        style={{ width: 200, height: 200, padding:25, margin:30, }}
      />
      <Text style={styles.title}>
              FAÇA SUA JOGADA
      </Text>
     
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Rodar D20</Text>
      </TouchableOpacity>
      {resultadoAtual !== null && (
        <Text style={styles.resultado}>Resultado Atual: {resultadoAtual}</Text>
      )}
      <View style={styles.resultadosAnteriores}>
        <Text style={styles.resultadosTitle}>Últimos resultados </Text>
        {resultados.map((result, index) => (
          <Text key={index} style={styles.resultadoAnterior}>  • {result}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B4513',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    marginBottom: 40,
    color:'white',
  },
  button: {
    backgroundColor: '#D4AF37',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,

  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
  resultado: {
    marginTop: 20,
    fontSize: 25,
    color:'white',
  },
  resultadosAnteriores: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    flexDirection: 'row', // Alinha os elementos em uma linha horizontal
    alignItems: 'center', // Centraliza verticalmente os elementos
    justifyContent: 'center', // Centraliza horizontalmente os elementos
    marginTop: 10,
    color: 'white',
  },   
  resultadosTitle: {
    fontSize: 22,
    marginBottom: 5,
    color:'white',
  },
  resultadoAnterior: {
    fontSize: 20,
    color:'white',
  },
});

export default App;
