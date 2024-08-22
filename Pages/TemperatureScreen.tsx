import React, { useState } from 'react';
import { View, ImageBackground, SafeAreaView } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import styles from './assets/styles';

const TemperatureScreen = ({ navigation, formData, setFormData }) => {
  const progress = 2 / 9;
  const [isNavigating, setIsNavigating] = useState(false);

  const handlePress = (temperature) => {
    setFormData({ ...formData, temperature });
    setIsNavigating(true);
    navigation.navigate('Humidity');
  };

  return (
    <ImageBackground source={require('./assets/bg13.png')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ProgressBar progress={progress} color="#F4EAD5" style={styles.progressBar} />
          <Text style={styles.question}>What temperature range do you prefer for your plant?</Text>
          <View style={styles.buttonGroup}>
            <Button
              mode={formData.temperature === 'Cool' ? 'contained' : 'outlined'}
              onPress={() => handlePress('Cool')}
              style={[styles.optionButton, formData.temperature === 'Cool' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              disabled={isNavigating}
              accessibilityLabel="Cool (60-70°F)"
            >
              Cool (60-70°F)
            </Button>
            <Button
              mode={formData.temperature === 'Moderate' ? 'contained' : 'outlined'}
              onPress={() => handlePress('Moderate')}
              style={[styles.optionButton, formData.temperature === 'Moderate' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              disabled={isNavigating}
              accessibilityLabel="Moderate (70-80°F)"
            >
              Moderate (70-80°F)
            </Button>
            <Button
              mode={formData.temperature === 'Warm' ? 'contained' : 'outlined'}
              onPress={() => handlePress('Warm')}
              style={[styles.optionButton, formData.temperature === 'Warm' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              disabled={isNavigating}
              accessibilityLabel="Warm (80-90°F)"
            >
              Warm (80-90°F)
            </Button>
          </View>
          
          <Button
            mode="outlined"
            onPress={() => {
              setIsNavigating(true);
              navigation.navigate('Humidity');
            }}
            style={styles.skipButton}
            labelStyle={styles.skipButtonText}
            disabled={isNavigating}
            accessibilityLabel="Skip to Humidity screen"
          >
            SKIP
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default React.memo(TemperatureScreen);
