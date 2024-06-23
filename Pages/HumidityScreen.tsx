import React from 'react';
import {  View, ImageBackground,  SafeAreaView } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import styles from './assets/styles';

const HumidityScreen = ({ navigation, formData, setFormData }) => {
  const progress = 2 / 7; // Update this index based on the current screen

  return (
    <ImageBackground source={require('./assets/bk.gif')} style={styles.background}>
       <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ProgressBar progress={progress} color="#fff" style={styles.progressBar} />
        <Text style={styles.question}>What is the humidity level in your room?</Text>
        <View style={styles.buttonGroup}>
          <Button
            mode={formData.humidity === 'low' ? 'contained' : 'outlined'}
            onPress={() => {
              setFormData({ ...formData, humidity: 'low' });
              navigation.navigate('Size'); // Navigate to the next screen
            }}
            style={styles.optionButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonText}
           >
            Low (&lt;20%)
          </Button>
          <Button
            mode={formData.humidity === 'medium' ? 'contained' : 'outlined'}
            onPress={() => {
              setFormData({ ...formData, humidity: 'medium' });
              navigation.navigate('Size'); // Navigate to the next screen
            }}
            style={styles.optionButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonText}
              >
            Normal (20%-60%)
          </Button>
          <Button
            mode={formData.humidity === 'high' ? 'contained' : 'outlined'}
            onPress={() => {
              setFormData({ ...formData, humidity: 'high' });
              navigation.navigate('Size'); // Navigate to the next screen
            }}
            style={styles.optionButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonText}
           >
            High (&gt;60%)
          </Button>
        </View>

        <Button mode="contained" onPress={() => navigation.navigate('Size')} style={styles.skipButton}  labelStyle={styles.skipButtonText}>
          SKIP
        </Button>
      </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HumidityScreen;
