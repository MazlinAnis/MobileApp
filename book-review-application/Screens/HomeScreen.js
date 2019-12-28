import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, SafeAreaView } from "react-native";
import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />;
}

export default class HomeScreen extends Component {
    static navigationOptions = {
    title: 'Books Library',
  };

  render() {
     return (
    <SafeAreaView style={styles.container}>
      <View>
         <Button onPress={() => this.props.navigation.navigate('TFIOS')} title="The Fault in Our Stars" />
      </View>
      <Separator />
      <View>
        <Button onPress={() => this.props.navigation.navigate('TLOTR')} title="The Lord of the Rings" />
      </View>
      <Separator />
      <View>
       <Button onPress={() => this.props.navigation.navigate('Hobbit')} title="The Hobbit"/>
      </View>
      <Separator />
      <View>
       <Button onPress={() => this.props.navigation.navigate('RJ')} title="Romeo and Juliet"/>
       </View>
      <Separator />
      <View  style={{marginVertical:50,}}>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.props.navigation.navigate('AddBook')}>
            <Text style={styles.submitButtonText}> Add New Books </Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
    submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
    submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});