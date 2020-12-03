import React from 'react';
import { View } from 'react-native';
import CameraScreenBase from './CameraKitCameraScreenBase';

export default class CameraScreen extends CameraScreenBase {
  renderGap() {
    return (
      <View style={{ flex: 10, flexDirection: 'column' }} />
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'transparent' }} {...this.props}>
        <View style={{ flex: 0.9 }}>
          {this.renderCamera()}
          {this.renderTopButtons()}
          {this.renderGap()}
        </View>
        <View style={{ flex: 0.1,bottom:40 }}>
          {this.renderBottomButtons()}
        </View>
      </View>
    );
  }
}


