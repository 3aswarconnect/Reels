import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { resetPassword } from '../services/authService';

export default function ResetScreen() {
  const [username, setUsername] = useState('');

  const handleReset = async () => {
    try {
      await resetPassword(username);
      Alert.alert("Password reset email sent!");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View>
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <Button title="Reset Password" onPress={handleReset} />
    </View>
  );
}
