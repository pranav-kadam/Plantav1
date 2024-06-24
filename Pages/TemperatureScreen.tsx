import React from 'react';
import { View, ImageBackground, SafeAreaView } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import styles from './assets/styles';

const TemperatureScreen = ({ navigation, formData, setFormData }) => {
  const progress = 2 / 9;  // Adjust this based on the screen's position in your flow

  return (
    <ImageBackground source={require('./assets/bg13.png')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ProgressBar progress={progress} color="#F4EAD5" style={styles.progressBar} />
          <Text style={styles.question}>What temperature range do you prefer for your plant?</Text>
          <View style={styles.buttonGroup}>
            <Button
              mode={formData.temperature === 'Cool' ? 'contained' : 'outlined'}
              onPress={() => {
                setFormData({ ...formData, temperature: 'Cool' });
                navigation.navigate('Humidity');
              }}
              style={[styles.optionButton, formData.temperature === 'Cool' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
            >
              Cool (60-70°F)
            </Button>
            <Button
              mode={formData.temperature === 'Moderate' ? 'contained' : 'outlined'}
              onPress={() => {
                setFormData({ ...formData, temperature: 'Moderate' });
                navigation.navigate('Humidity');
              }}
              style={[styles.optionButton, formData.temperature === 'Moderate' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
            >
              Moderate (70-80°F)
            </Button>
            <Button
              mode={formData.temperature === 'Warm' ? 'contained' : 'outlined'}
              onPress={() => {
                setFormData({ ...formData, temperature: 'Warm' });
                navigation.navigate('Humidity');
              }}
              style={[styles.optionButton, formData.temperature === 'Warm' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
            >
              Warm (80-90°F)
            </Button>
          </View>
          
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('Humidity')}
            style={styles.skipButton}
            labelStyle={styles.skipButtonText}
          >
            SKIP
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default TemperatureScreen;