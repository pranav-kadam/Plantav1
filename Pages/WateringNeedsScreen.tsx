import React, { useState } from 'react';
import { ImageBackground, View, SafeAreaView } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import styles from './assets/styles';

const WateringNeedsScreen = ({ navigation, formData, setFormData }) => {
  const progress = 6 / 9;
  const [isNavigating, setIsNavigating] = useState(false);

  const handlePress = (wateringNeeds) => {
    setFormData({ ...formData, wateringNeeds });
    setIsNavigating(true);
    navigation.navigate('Purpose');
  };

  return (
    <ImageBackground source={require('./assets/bg4.png')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ProgressBar progress={progress} color="#fff" style={styles.progressBar} />
          <Text style={styles.question}>How often do you want to water it?</Text>
          <View style={styles.buttonGroup}>
            <Button
              mode={formData.wateringNeeds === 'daily' ? 'contained' : 'outlined'}
              onPress={() => handlePress('daily')}
              style={[styles.optionButton, formData.wateringNeeds === 'daily' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              disabled={isNavigating}
              accessibilityLabel="Daily watering"
            >
              Daily
            </Button>
            <Button
              mode={formData.wateringNeeds === 'weekly' ? 'contained' : 'outlined'}
              onPress={() => handlePress('weekly')}
              style={[styles.optionButton, formData.wateringNeeds === 'weekly' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              disabled={isNavigating}
              accessibilityLabel="Weekly watering"
            >
              Weekly
            </Button>
            <Button
              mode={formData.wateringNeeds === 'monthly' ? 'contained' : 'outlined'}
              onPress={() => handlePress('monthly')}
              style={[styles.optionButton, formData.wateringNeeds === 'monthly' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              disabled={isNavigating}
              accessibilityLabel="Monthly watering"
            >
              Monthly
            </Button>
          </View>

          <Button
            mode="outlined"
            onPress={() => {
              setIsNavigating(true);
              navigation.navigate('Purpose');
            }}
            style={styles.skipButton}
            labelStyle={styles.skipButtonText}
            disabled={isNavigating}
            accessibilityLabel="Skip to Purpose screen"
          >
            SKIP
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default React.memo(WateringNeedsScreen);
