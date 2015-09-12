'use strict';

/*========================================================||
||   External required sources                            ||
||========================================================*/

var React = require('react-native');
// var Firebase = require('firebase');
// var d3 = require('d3');

/*========================================================||
||   These are the other views that need to be rendered   ||
||========================================================*/

var styles = require('./styles');
var Featured = require('./Featured');
var Search = require('./Search');
var Login = require('./Login');
var userID; // <--- A placeholder for the ID that will be captured during login

/*========================================================||
||   React native variables, used like HTML tags          ||
||========================================================*/

var {
AppRegistry,
Image,
ListView,
StyleSheet,
TabBarIOS,
Text,
View,
TouchableHighlight,
Component,
AlertIOS,
NavigatorIOS,
TouchableOpacity
} = React;

/*========================================================||
||   Creates the Katfish app on top of React Native       ||
||========================================================*/

class StartPage extends Component {

constructor(props) {
  super(props);
  // this.state = null;
  this.state = {selectedTab: 'featured'}
}

/*========================================================||
||   The render function is native and will be called     ||
||   every time the state is changed in the app           ||
||========================================================*/

render() {
 return (
   <TabBarIOS
   selectedTab={this.state.selectedTab}
   tintColor={'#FFF'}
   barTintColor={'#48BBEC'}
   translucent={'true'}>
   <TabBarIOS.Item
   selected={this.state.selectedTab === 'featured'}
   icon={{uri:'featured'}}
   onPress={() => {
    this.setState({
      selectedTab: 'featured'
    });
  }}>
  <Featured/>
  </TabBarIOS.Item>
  <TabBarIOS.Item
  selected={this.state.selectedTab === 'search'}
  icon={{uri:'search'}}
  onPress={() => {
    this.setState({
      selectedTab: 'search'
    });
  }}>
  <Search/>
  </TabBarIOS.Item>
  </TabBarIOS>
 )
};
}

module.exports = StartPage;
