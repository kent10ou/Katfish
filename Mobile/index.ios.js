var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var FacebookLoginButton = require('./FacebookLoginButton.js')
var { FBSDKLoginButton } = require('react-native-fbsdklogin')

var Katfish = React.createClass({
  renderCustomFacebookLoginButton: function() {
    return (
      <View>
        <Text>Custom Facebook Login Button</Text>
        <FacebookLoginButton
          style={styles.customFacebookButton}
          readPermissions={['email', 'public_profile']}
          onLoginCancelled={() => {
            console.log('Login with Facebook cancelled')
          }}
          onLoginFailed={(error) => {
            console.error('Error logging in with Facebook:', error)
          }}
          onLoginFinished={(result) => {
            console.log('Successfully logged in with Facebook!', result)
            signInWithExternalService('Facebook', result)
          }}
        />
      </View>
    )
  },

  renderFacebookSDKLoginButton: function() {
    return (
      <View>
        <Text>Facebook SDK Login Button </Text>
        <FBSDKLoginButton
          onLoginFinished={(result) => {
            console.log('Successfully logged in with Facebook!', result)
          }}
          onLogoutFinished={(result) => {
            console.log('Successfully logged out with Facebook', result)
          }}
        />
      </View>
    )
  },

  render: function() {
    return (
      <View style={styles.container}>
        {this.renderCustomFacebookLoginButton()}
        {this.renderFacebookSDKLoginButton()}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  customFacebookButton: {
    height: 80,
    width: 50,
    backgroundColor: 'blue'
  }
});

AppRegistry.registerComponent('Katfish', () => Katfish);