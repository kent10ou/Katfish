
'use strict';

var React = require('react-native');
//var FB = require('fb');
var FBSDKLogin = require('react-native-fbsdklogin');
var FBSDKCore = require('react-native-fbsdkcore');
var Login = require('./js/Login')

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS
} = React;

var {
  FBSDKLoginButton,
  FBSDKLoginManager
} = FBSDKLogin;

var {
  FBSDKGraphRequest,
  FBSDKGraphRequestManager,
  FBSDKAccessToken
} = FBSDKCore;

var Featured = require('./js/Featured');
var Search = require('./js/Search');

var fetchFriendsRequest = new FBSDKGraphRequest((error, result, params, token, ) => {
  if (error) {
    alert('Error making request.');
  } else {
    console.log('result from the graph req', result)
    return result
  }
}, '/me/friends', {}, this.tokenString, 'v2.4', 'GET');
//fetchFriendsRequest.start();

FBSDKGraphRequestManager.batchRequests([fetchFriendsRequest], function (error) {
  if (error) {
    console.log("ERROR: ", error)
  }
}, 60);

var Katfish = React.createClass({

  render: function() {
    window.Katfish = this;
    if(!this.tokenString){
      this.getToken();
      return (
        <Image
        source={{uri: 'http://q8italk.com/wp-content/uploads/2014/10/Green-Starry-iPhone-6-plus-wallpaper-ilikewallpaper_com.png'}}
        style={styles.loginImage}>
        <Login
        style={styles.loginContainer}/>
        </Image>
        );
    }
    else{
      return require('./js/TabBar')();
    }
  },
  getToken: function(){
    FBSDKAccessToken.getCurrentAccessToken((token) => {
      if (token) {
        // A non-null token indicates that the user is currently logged in.
        console.log('TOKEN: ', token);
        this.tokenString = token.tokenString;
        this.userID = token.userID;
      } else { 
        console.log('there is no token friend')
      }
    });

  },

});

console.log(FBSDKLoginManager)

var styles = require('./js/styles.js');

AppRegistry.registerComponent('Katfish', () => Katfish);