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
    title: 'The Lord of the Rings',
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
        <Text style={styles.header}>THE LORD OF THE RINGS</Text>
        <Text style={{textAlign: 'center', marginBottom: 10,}}>by J. R. R. Tolkien</Text>
      </View>

      <View>
        <Image source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg'}} 
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
          When Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom. {"\n"}{"\n"}

I love it so much I've done presentations about it at school, talked about it for hours on end with friends… and it definitely is the best book I have ever read! The book is a whole lot better than the film because you can imagine it however you like. Even so, it's the best!
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
    marginTop: 70,
    marginBottom: 5,
  },

});