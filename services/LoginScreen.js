import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { signIn } from '../services/authService';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signIn(username, password);
      Alert.alert("Login Successful!");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View>
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Forgot Password?" onPress={() => navigation.navigate("Reset")} />
      <Button title="Register" onPress={() => navigation.navigate("Register")} />
    </View>
  );
}
