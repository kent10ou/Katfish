/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

/*
npm install -g react-native-cli
react-native init testProject

JavaScript strict mode, which grants a better error handling. The second line loads the react-native module
*/
'use strict';

var React = require('react-native');

/*
The next lines are known as destructuring assignment. 
We pack all those elements into the variable React so we don’t have to type React.whatever inside our code.
*/
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  // TouchableHighlight,
  // AlertIOS
} = React;

/*
Our component will be a class using the new JavaScript syntax.
You can also create by writing: "class Katfish extends Component {...}"
*/
var Katfish = React.createClass({
  // getInitialState: function () {
  //   return ({score: 0})
  // },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  },

  // showAlert: function () {
  //   AlertIOS.alert('Cool!', 'This is a React Native alert!', [{text: 'Thanks'}] )
  // }
});



/*
The next feature of React Native is how you can style a view. 
We use the StyleSheet to define a CSS like styling for our view components. 
*/
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Katfish', () => Katfish);







/*
<Text style={styles.label}>{'Score: ' + this.state.score + '\n'}</Text>
<TouchableHighlight
  activeOpacity={0.6}
  underlayColor={'white'}
  onPress={() => this.setState({score: ++this.state.score})}>
  <Text style={styles.button}>Tap {'\n'}</Text>
</TouchableHighlight>
<TouchableHighlight
  activeOpacity={0.6}
  underlayColor={'white'}
  onPress={() => this.setState({score: --this.state.score})}>
  <Text style={styles.button}>minus {'\n'}</Text>
</TouchableHighlight>

<TouchableHighlight
  onPress={this.showAlert}>
  <Text>ALERT</Text>
</TouchableHighlight>
*/
