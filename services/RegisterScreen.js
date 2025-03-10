import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { signUp } from '../services/authService';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match!");
      return;
    }

    try {
      await signUp(email, username, password);
      Alert.alert("Registration Successful! Please verify your email.");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <TextInput placeholder="Confirm Password" secureTextEntry onChangeText={setConfirmPassword} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}
