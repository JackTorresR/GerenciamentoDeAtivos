import React, {Component, useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Actions } from 'react-native-router-flux';

export default function TelaResetarSenha() {
  const [email, setEmail] = useState('');


  return (
    <View style={Styles.containerPrincipal}>
      <Image
        style={Styles.redimensionarLogo}
        source={require('../../../assets/logo.png')}
      />
  
      <Text style={Styles.titulo}>{"Reiniciar senha"}</Text>

      <Text style={Styles.textoCorpo}>{"Você receberá um email para redefinir sua senha"}</Text>

      <View style={Styles.containerDosDados}>
        <TextInput
          style={{height: 40}}
          placeholder="Email"
          onChangeText={email => setEmail(email)}
          defaultValue={email}
        />
      </View>

      <View style={Styles.botaoContainer}>
        <TouchableOpacity style={Styles.botaoVoltar} onPress={()=>Actions.push('telaLogin')}>
          <Text style={Styles.textoBotaoVoltar}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.botaoEnviar} onPress={()=>null}>
          <Text style={Styles.textoBotaoEnviar}>Enviar email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  imagemContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
  },
  botaoContainer: {
    flex: 2,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  redimensionarLogo: {
      width: 120,
      height: 120,
      resizeMode: 'contain',
  },
  titulo: {
    fontSize: 40,
    color: '#02246c',
    fontWeight: 'bold',
  },
  textoCorpo: {
    fontSize: 15,
    color: '#000000',
    fontWeight: 'bold',
    margin: 15,
  },
  containerDosDados: {
    margin: 15,
    borderBottomWidth: 2,
    width: 300,
    borderColor: '#e0ebeb',
    borderRadius: 10,
  },
  textoBotaoVoltar: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  textoBotaoEnviar: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  botaoVoltar: {
    width: 160,
    height: 50,
    backgroundColor: '#acd54a',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 5,
  },
  botaoEnviar: {
    width: 160,
    height: 50,
    backgroundColor: '#002566',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 5,
  },
});
