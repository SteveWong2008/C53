import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class RedButton extends Component {
render() {
  return <Button color = "red" title ="Click Me"/>;
  
}
}
export default class App extends Component {
  render() {
    return (
      
      <View style = {{marginTop:300}}>
      <RedButton/>
      <Text style = {{marginTop:-60,marginLeft:90}}>My First Text Component</Text>
      
      
      
      </View>
    );
  }
}