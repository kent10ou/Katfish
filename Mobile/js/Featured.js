'use strict';

/*========================================================||
||   External required sources                            ||
||========================================================*/

var React = require('react-native'),
person = require('./PersonDB');


/*========================================================||
||   Locally required sources                             ||
||========================================================*/

var FeatNav = require('./FeaturedNav');
var SearchNav = require('./SearchNav')
var styles = require('./styles');


/*========================================================||
||   React native variables, used like HTML tags          ||
||========================================================*/

var {
  NavigatorIOS,
  Component,
  StatusBarIOS,
  AlertIOS
} = React;

class Featured extends Component {
  render() {
    StatusBarIOS.setStyle('light-content');
    return (
      // <NavigatorIOS
      //     style={styles.featContainer}
      //     initialRoute={{
      // title: "Katfish Me!",
      // component: FeatNav
      // }}/>
      <NavigatorIOS
      style={styles.featContainer}
      initialRoute={{
        component: FeatNav,

        leftButtonTitle: 'Profile',
        onLeftButtonPress: () => {
          this.props.navigator.push('./SearchNav'),
          StatusBarIOS.setStyle('default');
          onRightButtonPress: () => {
            this.props.pop()
          }
        },

        rightButtonTitle: 'Alert',
        onRightButtonPress: () => {
          AlertIOS.alert(
            'Bar Button Action',
            'Recognized a tap on the bar button icon',
            [
              {
                text: 'OK',
                onPress: () => console.log('Tapped OK'),
              },
            ]
          );
        },
        title: 'Katfish Me!',
      }}


      tintColor="#FFFFFF"
      barTintColor="#183E63"
      titleTextColor="#FFFFFF"
      translucent="true"/>
    );
  }
}

module.exports = Featured;