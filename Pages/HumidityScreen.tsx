import React, { useState } from 'react';
import { View, ImageBackground, SafeAreaView } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import styles from './assets/styles';

const HumidityScreen = ({ navigation, formData, setFormData }) => {
  const progress = 3 / 9;
  const [isNavigating, setIsNavigating] = useState(false);

  const handlePress = (humidityLevel) => {
    setFormData({ ...formData, humidity: humidityLevel });
    setIsNavigating(true);
    navigation.navigate('Size');
  };

  return (
    <ImageBackground source={require('./assets/bg1.png')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ProgressBar progress={progress} color="#fff" style={styles.progressBar} />
          <Text style={styles.question}>What is the humidity level in your room?</Text>
          <View style={styles.buttonGroup}>
            <Button
              mode={formData.humidity === 'low' ? 'contained' : 'outlined'}
              onPress={() => handlePress('low')}
              style={[styles.optionButton, formData.humidity === 'low' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              disabled={isNavigating}
              accessibilityLabel="Low Humidity Option"
            >
              Low (&lt;20%)
            </Button>
            <Button
              mode={formData.humidity === 'medium' ? 'contained' : 'outlined'}
              onPress={() => handlePress('medium')}
              style={[styles.optionButton, formData.humidity === 'medium' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              disabled={isNavigating}
              accessibilityLabel="Medium Humidity Option"
            >
              Normal (20%-60%)
            </Button>
            <Button
              mode={formData.humidity === 'high' ? 'contained' : 'outlined'}
              onPress={() => handlePress('high')}
              style={[styles.optionButton, formData.humidity === 'high' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              disabled={isNavigating}
              accessibilityLabel="High Humidity Option"
            >
              High (&gt;60%)
            </Button>
          </View>

          <Button
            mode="contained"
            onPress={() => {
              setIsNavigating(true);
              navigation.navigate('Size');
            }}
            style={styles.skipButton}
            labelStyle={styles.skipButtonText}
            disabled={isNavigating}
            accessibilityLabel="Skip to Size Screen"
          >
            SKIP
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default React.memo(HumidityScreen);
