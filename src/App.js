import React, { Component } from 'react';
import {
  WebView,
  View,
  StatusBar
} from 'react-native';
import styles from './css/styles';

export default class App extends Component {
  render() {
    var HtmlCode = '<h1>React Native Codility</h1>' +
      '<p>Welcome to React Native Codility for Webview components and It is used when you want to render web page to your mobile app inline.</p>' +
      '<img src="https://raw.githubusercontent.com/AndroidCodility/StaggeredRecyclerView/master/images/six.jpg" alt="Image" width="100%" height="350" >';

    return (
      <View style={styles.WebViewStyle}>
        <StatusBar
          backgroundColor="#117864"
          barStyle="light-content"
        />
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ html: HtmlCode }}
        />
      </View>
    );
  }
}
