import React from 'react';
import { StyleSheet,ImageBackground, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native';
import bg from './assets/bg.png'



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'שם משתמש',
      password: 'סיסמא'
    };
  }

  render() {
    return (
      <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>
        <View style={{flex: 1,justifyContent: "center",alignItems: "center", flexDirection: "column" ,paddingTop: 200}}> 

          <TextInput onChangeText={(text) => this.setState({userName : text})} value={this.state.userName} style={styles.textBoxTwo}></TextInput>
          <TextInput onChangeText={(text) => this.setState({password : text})} value={this.state.password} style={styles.textBox}></TextInput>
          <Text style={{fontWeight: "900", fontSize: 40,marginTop: 0, marginBottom: 20 }}>כניסה</Text>
        </View>
    </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container : {
    display: "flex", 
    alignItems: "center", 
    paddingTop: 50
  },

  textBox : {
    textAlign: "center",width: 300, height: 50, backgroundColor: "white", borderRadius: 10, borderWidth: 1, marginBottom: 20
  },
  textBoxTwo : {
    textAlign: "center",width: 300, height: 50, backgroundColor: "white", borderRadius: 10, borderWidth: 1, marginBottom: 20, marginTop: 200
  }
});
