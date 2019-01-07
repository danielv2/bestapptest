import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView, Switch } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements'

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={{ padding: 20, flexDirection: "row" }}>
          <Avatar
            large
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
          />

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 5
            }}
          >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text>39</Text>
              <Text>Posts</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text>339</Text>
              <Text>followers</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text>393</Text>
              <Text>following</Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              width: "100%",
              marginLeft: 1,
              alignItems: "center"
            }}
          >
            <Text>Edit Profile</Text>
          </View>
        </View>
      </View>
    );
  }
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  containerNav: {
    flex: 1
  }
});