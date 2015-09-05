
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} = React;

var Login = require('./Login');
// var Feed = require('./Feed');

/**
 * A sample app that demonstrates use of the FBSDK login button, native share dialog, and graph requests.
 */
var Katfish = React.createClass({
  render: function() {
    return (
      <Image
        source={{uri: 'http://q8italk.com/wp-content/uploads/2014/10/Green-Starry-iPhone-6-plus-wallpaper-ilikewallpaper_com.png'}}
        style={styles.loginImage}>
        <View style={styles.disclaimerContainer}>
          <Text style={styles.disclaimerText}>Images taken from New Horizons Facebook page</Text>
        </View>
        <Login style={styles.loginContainer}/>

      </Image>
    );
  }
});

var styles = StyleSheet.create(require('./styles.js'));

AppRegistry.registerComponent('Katfish', () => Katfish);