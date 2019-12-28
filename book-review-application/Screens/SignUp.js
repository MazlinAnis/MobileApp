import React, { Component } from 'react';
import {
  Content,
  Container,
  Item,
  Form,
  Input,
  Button,
  Label,
  Text,
} from 'native-base';
import * as firebase from 'firebase';

export default class SignupScreen extends Component {
  static navigationOptions = {
    title: 'Sign Up Account',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  SignUp = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert('Please enter at least 6 characters');
        return;
      }

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user);
        });

      alert('You have successfully created an account!');
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  render() {
    return (
      <Container>
        <Content>
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
              full
              rounded
              success
              style={{ marginTop: 20 }}
              onPress={() =>
                this.SignUp(this.state.email, this.state.password)
              }>
              <Text>Signup</Text>
            </Button>
            <Button
              transparent
              style={{ marginTop: 20 }}
              onPress={() => this.props.navigation.navigate('LogIn')}>
              <Text
                style={{
                  textAllign: 'center',
                  marginLeft: 155,
                  marginTop: 10,
                }}>
                LogIn
              </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
