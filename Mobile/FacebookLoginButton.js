
var React = require('react-native')
var {
  StyleSheet,
  Text,
  TouchableOpacity,
} = React

var { FBSDKAccessToken } = require('react-native-fbsdkcore')
var { FBSDKLoginManager } = require('react-native-fbsdklogin')

var FacebookLoginButton = React.createClass({
  defaultProps: {
    readPermissions: [],
    publishPermissions: [],

    onLoginFinished: (result) => {},
    onLoginCancelled: () => {},
    onLoginFailed: (error) => {}
  },

  signIn: function() {
    const {
      readPermissions,
      
      onLoginFinished,
      onLoginCancelled,
      onLoginFailed,
    } = this.props

    FBSDKLoginManager.logInWithReadPermissions(readPermissions, (error, result) => {
      if (error) {
        onLoginFailed(error)
      } else if (result.isCancelled) {
        onLoginCancelled()
      } else {
        FBSDKAccessToken.getCurrentAccessToken((token) => {
          console.log('Got token:', token)
          const userData = _.extend(result, token)

          onLoginFinished(userData)
        })
      }
    })
  },

  render: function() {
    const {
      style,
    } = this.props

    return (
      <TouchableOpacity
        color='#3B5997'
        onPress={() => this.signIn()}
        style={[style, styles.button]}>
        <Text>Login with Facebook</Text>
      </TouchableOpacity>
    )
  },
})

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
  },

  text: {
    flex: 1,
    fontSize: 14,
  },
  bold: {
    fontWeight: '900',
  },

  icon: {},
})

module.exports = FacebookLoginButton