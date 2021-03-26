import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class AnyColorbutton extends Component {
  displayAlert=()=>{
    alert("danger")
  }
  render(){
    return(
      <Button color={this.props.color} title="Click Me" onPress={this.displayAlert}/>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <AnyColorbutton color="black"/>
        <Text>My First React Component</Text>
      </View>
    );
  }
}