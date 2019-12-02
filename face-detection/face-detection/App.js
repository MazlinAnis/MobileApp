import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Camera} from 'expo-camera';
import Constants from 'expo-constants';
import * as FaceDetector from 'expo-face-detector';
import * as Permissions from 'expo-permissions';

export default class App extends React.Component {
  state = {
      hasCameraPermission:null,
      faces : []
    }
    //get camera permission
    //Permissions.CAMERA - to get photo and video
    async componentWillMount() {
       const { status } =await Permissions.askAsync(Permissions.CAMERA);
       this.setState({hasCameraPermission:status==='granted'}); //set to granted to gain access to camera
    }

    renderFaces = () => 
    <View style={styles.facesContainer} pointerEvents="none">
      {this.state.faces.map(this.renderFace)}
    </View>

//get face area and detection
//detect face bounds, rollAngle and yawAngle
    renderFace({ bounds, faceID, rollAngle, yawAngle }) {
    return (
      <View
        key={faceID}
        transform={[
          { perspective: 600 }, //the best perspective to keep the box and face are align in the same lane/axis
          { rotateZ: `${rollAngle.toFixed(0)}deg` }, //degree of head tilting from right to left
          { rotateY: `${yawAngle.toFixed(0)}deg` }, //degree of head turning from right to left
        ]}
        style={[
          styles.face,
          {
            ...bounds.size,
            left: bounds.origin.x, //to keep the left side of the box to the left side of the face
            top: bounds.origin.y, //to keep the top side of the box with the top part of the face
          },
        ]}>
        <Text style={styles.faceText}>rollAngle: {rollAngle.toFixed(0)}</Text>
        <Text style={styles.faceText}>yawAngle: {yawAngle.toFixed(0)}</Text>
      </View>
    );
  }


  render() {
    const { hasCameraPermission } = this.state; //gain camera permission

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>; //request for camera permission
    } else if (hasCameraPermission === false) {
      return <Text>Camera access denied</Text>; //text shows when access denied
    } else {
      return (
        <View style={styles.container}>
          <Camera
             style={styles.camera}
             type={'front'} //can only use one camera, either front or back camera
             onFacesDetected={this.handleFacesDetected} //trigger handleFacesDetected function
             faceDetectorSettings={{
               mode: FaceDetector.Constants.Mode.fast,
               detectLandmarks: FaceDetector.Constants.Mode.none,
               runClassifications: FaceDetector.Constants.Mode.none,
             }}>
              <View style={styles.topBar}>
                <Text style={styles.textcolor}>x: {this.state.faces.length ? this.state.faces[0].bounds.origin.x.toFixed(0) : 0}</Text>
                <Text style={styles.textcolor}>y: {this.state.faces.length ? this.state.faces[0].bounds.origin.y.toFixed(0) : 0}</Text>
              </View>
              <View style={styles.bottomBar}>
                <Text style={styles.textcolor}>Heigth: {this.state.faces.length ? this.state.faces[0].bounds.size.height.toFixed(0) : 0}</Text>
                <Text style={styles.textcolor}>width: {this.state.faces.length ? this.state.faces[0].bounds.size.width.toFixed(0) : 0}</Text>
              </View>
             </Camera>
             { this.state.faces.length ? this.renderFaces() : undefined}
           
        </View>
      );
    }
  }

  handleFacesDetected = ({ faces }) => {
    if(faces.length>0){
      this.setState({ faces });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topBar: {
    flex: 0.2,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight+1,
  },
  bottomBar: {
    flex: 0.2,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  face: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 1,
    position: 'absolute',
    borderColor: '#808000',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  faceText: {
    color: '#32CD32',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'transparent',
  },
  facesContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  textcolor:{
    color: '#008080',
  }
});