'use strict';

/*========================================================||
||   External required sources                            ||
||========================================================*/

var React = require('react-native'),
REQUEST_URL = 'https://katfish.firebaseio.com/pond.json',
Firebase = require('firebase'),
person = require('./PersonDB'),
ref = new Firebase("https://katfish.firebaseio.com/"),

/*========================================================||
||   Locally defined variables                            ||
||========================================================*/

styles = require('./styles'),
userID,
traits;

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
 ScrollView
} = React;

/*========================================================||
||   Adds the SearchNav view on top of Katfish            ||
||========================================================*/

var SearchNav = React.createClass ({
  render() {
    if(!this.state){
      this.formatFriends();
      return this.renderLoadingView()
    }
    return (
      <View style={styles.featNavContainer}>
      <Image source={{uri: 'http://chrissalam.com/bash/fishing.png'}} style={{backgroundColor: 'transparent', height: '600'}}>
      <ScrollView>
      {this.state.names}
      </ScrollView>
      </Image>
      </View>
      )
  },

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  },

  clickHandler(friend){
    person.id = friend.id;
    person.name = friend.name;
    console.log('person.name')
    // window.Featured.setState({reloaded: true});
    window.FeaturedNav.setState({reloaded: true});
    window.Katfish.setState({
      selectedTab: 'featured'
    })
  },

  formatFriends(){
    var that = this,
    names = [],
    friends = window.Katfish.friends;

    for(var i = 0; i < friends.length; i++){
      if(friends[i].name){
        (function(friend){
          names.push(
            <TouchableHighlight style={{underlayColor: 'white'}}
            onPress={()=>{that.clickHandler(friend)}}>
              <Image source={{uri: 'http://graph.facebook.com/' + friend.id + '/picture?type=large'}}
                style={{margin: 20, width: 180, height: 180, borderRadius: 90}}>
                <View style={styles.searchNavOverlay}>
                  <Text style={styles.searchNavChoiceText}>{friends[i].name}</Text>
                </View>
              </Image>
            </TouchableHighlight>
          )
          that.setState({'names' : names})
        })(friends[i])
      }
    }
  }
});

module.exports = SearchNav;