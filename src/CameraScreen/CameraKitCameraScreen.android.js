import React from 'react';
import {View} from 'react-native';
import CameraScreenBase from './CameraKitCameraScreenBase';

export default class CameraScreen extends CameraScreenBase {
  renderGap() {
    return (
      <View style={{flex: 10, flexDirection: 'column'}}/>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'transparent' }} {...this.props}>
        {this.renderCamera()}
        {this.renderTopButtons()}
        {this.renderGap()}
        <View style={{position:"absolute",alignSelf:"center",bottom:2}}>{this.renderBottomButtons()}</View>
      </View>
    );
  }
}


