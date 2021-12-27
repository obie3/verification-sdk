import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class index extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
