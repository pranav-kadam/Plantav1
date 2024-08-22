import React, { useState } from 'react';
import { View, ImageBackground, SafeAreaView } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import styles from './assets/styles';

const FloweringScreen = ({ navigation, formData, setFormData }) => {
  const progress = 8 / 9;
  const [isNavigating, setIsNavigating] = useState(false);

  const handlePress = (floweringPreference) => {
    setFormData({ ...formData, flowering: floweringPreference });
    setIsNavigating(true);
    navigation.navigate('Aesthetics');
  };

  return (
    <ImageBackground source={require('./assets/bg10.png')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ProgressBar progress={progress} color="#F4EAD5" style={styles.progressBar} />
          <Text style={styles.question}>Do you prefer flowering plants?</Text>
          <View style={styles.buttonGroup}>
            <Button
              mode={formData.flowering === 'Yes' ? 'contained' : 'outlined'}
              onPress={() => handlePress('Yes')}
              style={[styles.optionButton, formData.flowering === 'Yes' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              disabled={isNavigating}
              accessibilityLabel="Yes, prefer flowering plants"
            >
              Yes
            </Button>
            <Button
              mode={formData.flowering === 'No' ? 'contained' : 'outlined'}
              onPress={() => handlePress('No')}
              style={[styles.optionButton, formData.flowering === 'No' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              disabled={isNavigating}
              accessibilityLabel="No, do not prefer flowering plants"
            >
              No
            </Button>
          </View>

          <Button
            mode="outlined"
            onPress={() => {
              setIsNavigating(true);
              navigation.navigate('Aesthetics');
            }}
            style={styles.skipButton}
            labelStyle={styles.skipButtonText}
            disabled={isNavigating}
            accessibilityLabel="Skip to Aesthetics screen"
          >
            SKIP
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default React.memo(FloweringScreen);
