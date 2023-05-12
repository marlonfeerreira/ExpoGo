import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState('');
  const [nomes, setNomes] = useState([]);
  const [mostrarErro, setMostrarErro] = useState(false);

  const adicionarNome = () => {
    if (nome !== ''){
      setNomes([...nomes, nome]);
      console.log('Nome adicionado', nome);
      setNome('');
      setMostrarErro(false);

    } else {
      setMostrarErro(true);
    }
      
  };

  const removerNome = (index) => {
    setNomes(nomes.filter((_, i) => i !== index));
  };


  const renderItem = ({ item, index }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text>{item}</Text>
      <TouchableOpacity onPress={() => removerNome(index)}>
        <View style={[styles.botao, { backgroundColor: 'red' }]}>
          <Text style={{ fontSize: 20, color: 'white' }}>-</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container }>
      <Text>Marlon Ferreira </Text>
      <Text style={{ color: 'blue' }}>React Native</Text>

      <View style={{ flexDirection: 'row', alignItems: 'center' }} >
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <TextInput
            style={{ width: 200, height: 30, borderWidth: 1, margin: 10, padding: 8 }}
            placeholder='Insira o Nome Aqui'
            value={nome}
            onChangeText={setNome}
          />
          <View style={{ flexDirection:'row'}}>{mostrarErro &&(
              <Text style={{ color: 'red' }}>O nome não pode estar vazio</Text>
            )
            }
          </View>
        </View>
      
        <TouchableOpacity onPress={adicionarNome}>
          <View style={styles.botao1}>
            <Text style={{ color: 'white', fontSize: 20,  }}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={nomes}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item}-${index}`}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11111',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 60,
    borderWidth: 1,
  },
  botao1: {
    display: 'flex',
    backgroundColor: 'green',
    width: 30,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    
  },
  botao: {
    backgroundColor: '#ccc',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginBottom: 10,
  },
  

  
});
