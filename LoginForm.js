import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Iniciar Sesión</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre de Usuario"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Button title="Ingresar" onPress={handleFormSubmit} />
        {isSubmitted && (
          <Text style={styles.welcomeText}>¡Bienvenido de vuelta, {username}!</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e9eeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    width: '100%',
  },
  welcomeText: {
    marginTop: 20,
    fontSize: 20,
    color: '#6e9eeb',
    fontWeight: 'bold',
  },
});

export default LoginForm;
