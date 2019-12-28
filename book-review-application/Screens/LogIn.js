import React, { Component } from 'react';
import {
  Container,
  Item,
  Form,
  Input,
  Button,
  Label,
  Text,
  StyleSheet,
} from 'native-base';
import SignupScreen from './SignUp';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login Account',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  Login = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res.user.email);
        });
      this.props.navigation.navigate('HomeScreen');
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  render() {
    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Button
            style={{ marginTop: 15 }}
            full
            rounded
            success
            onPress={() => this.Login(this.state.email, this.state.password)}>
            <Text>Login</Text>
          </Button>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={{ textAllign: 'center', marginLeft: 60, marginTop:10 }}>
              Do not have account? Sign up here
            </Text>
          </Button>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={{ textAllign: 'center', marginLeft: 150, marginRight: 20, marginTop:10 }}>Home</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
