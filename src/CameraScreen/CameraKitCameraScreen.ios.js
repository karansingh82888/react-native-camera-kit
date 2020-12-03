import React from 'react';
import { View } from 'react-native';
import CameraScreenBase from './CameraKitCameraScreenBase';

export default class CameraScreen extends CameraScreenBase {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }} {...this.props}>
        {this.renderCamera()}
        <View style={{ position: "absolute", alignSelf: "flex-end" }}>{this.renderTopButtons()}</View>
        {this.renderRatioStrip()}
        <View style={{position:"absolute",alignSelf:"center",bottom:40}}>
        {this.renderBottomButtons()}
        </View>
      </View>
    );
  }
}
