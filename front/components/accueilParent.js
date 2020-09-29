import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Acceuil extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.titre1}>HOMEE</Text>
        <Text style={styles.titre2}>Emploi du temps</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titre1: {
    
    fontWeight: "bold",
    fontSize: 50,
    color: "#A5A14E",
    marginBottom: 30
  },
  titre2:{
    color: "white",
    fontSize:15
  }
});
