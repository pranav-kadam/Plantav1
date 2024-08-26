import React from 'react';
import { View, ImageBackground, SafeAreaView } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import styles from './assets/styles';

const LightingScreen = ({ navigation, formData, setFormData }) => {
  const progress = 1 / 9;

  const handlePress = (lightingType) => {
    setFormData({ ...formData, lighting: lightingType });
    navigation.navigate('Temperature');
  };

  return (
    <ImageBackground source={require('./assets/bg9.png')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ProgressBar progress={progress} color="#F4EAD5" style={styles.progressBar} />
          <Text style={styles.question}>What's the lighting like in your room?</Text>
          <View style={styles.buttonGroup}>
            <Button
              mode={formData.lighting === 'Natural Light' ? 'contained' : 'outlined'}
              onPress={() => handlePress('Natural Light')}
              style={[styles.optionButton, formData.lighting === 'Natural Light' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              accessibilityLabel="Natural Light Option"
            >
              Natural Light
            </Button>
            <Button
              mode={formData.lighting === 'Artificial Light' ? 'contained' : 'outlined'}
              onPress={() => handlePress('Artificial Light')}
              style={[styles.optionButton, formData.lighting === 'Artificial Light' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              accessibilityLabel="Artificial Light Option"
            >
              Artificial Light
            </Button>
          </View>

          <Button 
            mode="outlined" 
            onPress={() => navigation.navigate('Temperature')} 
            style={styles.skipButton}
            labelStyle={styles.skipButtonText}
            accessibilityLabel="Skip to Temperature Screen"
          >
            SKIP
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LightingScreen;
