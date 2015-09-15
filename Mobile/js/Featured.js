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
var styles = require('./styles');

/*========================================================||
||   React native variables, used like HTML tags          ||
||========================================================*/

var {
  NavigatorIOS,
  Component,
  Image
} = React;

class Featured extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.featContainer}
        initialRoute={{
          title: "Katfish "+ person.name,
        component: FeatNav
      }}/>
      );
  }
}

module.exports = Featured;