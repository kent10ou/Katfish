'use strict';

/*========================================================||
||   External required sources                            ||
||========================================================*/

var React = require('react-native');
var FBSDKLogin = require('react-native-fbsdklogin');
var FBSDKCore = require('react-native-fbsdkcore'),
REQUEST_URL = 'https://katfish.firebaseio.com/pond.json',
Firebase = require('firebase'),
person = require('./PersonDB'),
Login = require('./Login');

/*========================================================||
||   Locally defined variables                            ||
||========================================================*/

var styles = require('./styles')

/*========================================================||
||   React native variables, used like HTML tags          ||
||========================================================*/

var {
 View,
 Text,
 Component,
 ListView,
 Image,
 TouchableHighlight,
} = React;

var {
  FBSDKGraphRequest,
  FBSDKGraphRequestManager,
  FBSDKAccessToken
} = FBSDKCore;
console.log("USERID" ,window.Katfish.userID)
/*========================================================||
||   Adds the SearchNav view on top of Katfish            ||
||========================================================*/
var MoreNav = React.createClass ({

  render() {
    return (
      <View style={styles.moreNavContainer}>
      <Image source={{uri: 'http://graph.facebook.com/' + window.Katfish.userID + '/picture?type=large'}}
        style={{marginTop: 80, width: 200, height: 200, borderRadius: 100}} />
        <TouchableHighlight onPress={this.clickHandler}>
          <Image
            // source={require('../Images/fblogout.png')}
            style={styles.loginButton}/>
        </TouchableHighlight>
      </View>
    )
  },
  clickHandler() {
    window.Login.state = null;
    window.Katfish.state = null;
  }
});

module.exports = MoreNav;