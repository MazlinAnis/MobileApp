import * as React from 'react';
import {
  Button,
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class ImagePickerExample extends React.Component {
  static navigationOptions = {
    title: 'New Book Library',
   }

  state = {
    image: null,
    review: ' ',
    title: '',
    author: '',
  }
  handleReview = (text) => {
this.setState({ review: text })
}
  handleTitle = (text) => {
this.setState({ title: text })
}
  handleAuthor = (text) => {
this.setState({ author: text })
}
title = (title) => {
alert('Your book: ' + title)
}
  ;

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.header}>ADD NEW BOOK REVIEW</Text>
          <TextInput
            style={styles.title}
            underlineColorAndroid="transparent"
            placeholder="Title"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleTitle}
          />

    <TextInput
            style={styles.author}
            underlineColorAndroid="transparent"
            placeholder="Author"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleAuthor}
          />
        <Button
          title="Pick your image from camera roll "
          onPress={this._pickImage}
        />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Drop your review here"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleReview}
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.title(this.state.title)}>
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
    console.log('hi');
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    height: 100,
    width: 300,
    borderColor: '#7a42f4',
    borderWidth: 2,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  },
  header: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    height: 50,
    width: 300,
    borderColor: '#7a42f4',
    borderWidth: 2,
    textAlign: 'center',
  },
   author: {
    height: 50,
    width: 300,
    borderColor: '#7a42f4',
    borderWidth: 2,
    textAlign: 'center',
    marginTop:10, 
  },
});