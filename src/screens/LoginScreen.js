import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    Alert,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import PhoneStatusBar from '../components/PhoneStatusBar';
import { nectarTheme } from '../data/nectarData';
import { scale } from '../utils/layout';

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const cleanEmail = email.trim();
    const cleanPassword = password.trim();

    if (!cleanEmail || !cleanPassword) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    const userData = {
      email: cleanEmail,
      name: cleanEmail.split('@')[0] || 'User',
    };

    Alert.alert('Success', 'Login successful');

    onLogin(userData);
  };

  return (
    <View style={styles.screen}>
      <PhoneStatusBar />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Log In</Text>
          <Text style={styles.subtitle}>
            Enter your email and password
          </Text>
        </View>

        <View style={styles.form}>
          {/* EMAIL */}
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={scale(20)} color={nectarTheme.textSecondary} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </View>

          {/* PASSWORD */}
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={scale(20)} color={nectarTheme.textSecondary} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          {/* BUTTON */}
          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </Pressable>
        </View>

        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: nectarTheme.background },

  content: { flex: 1, padding: scale(24), paddingTop: scale(60) },

  header: { alignItems: 'center', marginBottom: scale(40) },

  title: { fontSize: scale(32), fontWeight: 'bold', color: nectarTheme.text },

  subtitle: { fontSize: scale(16), color: nectarTheme.textSecondary },

  form: {},

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F3F2',
    borderRadius: scale(12),
    paddingHorizontal: scale(16),
    marginBottom: scale(16),
    height: scale(56),
  },

  input: { flex: 1, marginLeft: 10 },

  button: {
    backgroundColor: '#53B175',
    height: scale(56),
    borderRadius: scale(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },

  buttonText: {
    color: '#fff',
    fontSize: scale(18),
    fontWeight: '700',
  },

  signUpText: {
    textAlign: 'center',
    marginTop: scale(20),
    color: nectarTheme.textSecondary,
  },
  signUpLink: {
    color: nectarTheme.primary,
    fontWeight: '700',
  },
});