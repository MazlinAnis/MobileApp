import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';


export default class TFIOSScreen extends Component {
   static navigationOptions = {
    title: 'Romeo and Juliet',
   }
   
  constructor() {
    super();
    this.state = {
      Default_Rating: 2,
      Max_Rating: 5,
    };
    //Filled Star. You can also give the path from local
    this.Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';

    //Empty Star. You can also give the path from local
    this.Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
  }
  UpdateRating(key) {
    this.setState({ Default_Rating: key });
    //Keeping the Rating Selected in state
  }


  render() {
    let React_Native_Rating_Bar = [];
    //Array to hold the filled or empty Stars
    for (var i = 1; i <= this.state.Max_Rating; i++) {
      React_Native_Rating_Bar.push(
        <TouchableOpacity
          activeOpacity={0.7}
          key={i}
          onPress={this.UpdateRating.bind(this, i)}>
          <Image
            style={styles.StarImage}
            source={
              i <= this.state.Default_Rating
                ? { uri: this.Star }
                : { uri: this.Star_With_Border }
            }
          />
        </TouchableOpacity>
      );
    }
    return (
      <ScrollView style={styles.container}>
      <View style={styles.MainContainer}>

      <View>
        <Text style={styles.header}>ROMEO AND JULIET</Text>
        <Text style={{textAlign: 'center', marginBottom: 10,}}>by William Shakespeare</Text>
      </View>

      <View>
        <Image source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/51dWHaLM2yL._SX331_BO1,204,203,200_.jpg'}} 
          style={{width: 200, height:300,}} />
        </View>

        {/*View to hold our Stars*/}
        <View style={styles.childView}>{React_Native_Rating_Bar}</View>
        
            <Text style={styles.textStyle}>
            {/*To show the rating selected*/}
              {this.state.Default_Rating} / {this.state.Max_Rating}
            </Text>
        

        
        <Text style={{ fontSize: 23, color: 'black', fontWeight: 'bold', marginBottom:10, marginTop:15, textAlign:'center' }}>
          REVIEW
        </Text>
        <Text style={styles.contents}>
          As much as Romeo and Juliet is a tragic love story, it is also a play about hate. The bloody feud between the Capulets and the Montagues is the backdrop for all of the action in the play and it is the catalyst for the tragic suicides of the two lovers. One may idealize the purity of love between Romeo and Juliet, but we must pay as much attention to the hate and anger which fuel the story. Love and hate are equally tragic each in their own way. {'\n'}
          {'\n'}It is amazing that you can find all these in a tragedy; only a great master can accomplish that feat. The story is both romantic and tragic, as we well know. But what is incredible is that the play is a “beautiful” tragedy. This is one of the most outstanding plays that I have read. I don’t recommend this book to anyone who is still in Elementary school as the writing is difficult to understand and there are some suggestive lines. For students in High School, give the play a chance. It is amazing when you truly understand what is happening.
        </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
    container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    textAlignVertical: 'top',
  },

  childView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },

  StarImage: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    marginTop: 15,
    marginLeft: 15,
  },
  contents: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    justifyContent: 'center',
    fontSize: 15,
  },

    header: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 190,
    marginBottom: 5,
  },

});