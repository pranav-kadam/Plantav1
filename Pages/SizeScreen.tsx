import React, { useState } from 'react';
import { ImageBackground, View, SafeAreaView } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import styles from './assets/styles';

const SizeScreen = ({ navigation, formData, setFormData }) => {
  const progress = 4 / 9;
  const [isNavigating, setIsNavigating] = useState(false);

  const handlePress = (size) => {
    setFormData({ ...formData, size });
    setIsNavigating(true);
    navigation.navigate('Space');
  };

  return (
    <ImageBackground source={require('./assets/bg2.png')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ProgressBar progress={progress} color="#fff" style={styles.progressBar} />
          <Text style={styles.question}>What size of plant are you looking for?</Text>
          <View style={styles.buttonGroup}>
            <Button
              mode={formData.size === 'small' ? 'contained' : 'outlined'}
              onPress={() => handlePress('small')}
              style={[styles.optionButton, formData.size === 'small' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              disabled={isNavigating}
              accessibilityLabel="Select small size plant"
            >
              Small
            </Button>
            <Button
              mode={formData.size === 'medium' ? 'contained' : 'outlined'}
              onPress={() => handlePress('medium')}
              style={[styles.optionButton, formData.size === 'medium' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              disabled={isNavigating}
              accessibilityLabel="Select medium size plant"
            >
              Medium
            </Button>
            <Button
              mode={formData.size === 'large' ? 'contained' : 'outlined'}
              onPress={() => handlePress('large')}
              style={[styles.optionButton, formData.size === 'large' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              disabled={isNavigating}
              accessibilityLabel="Select large size plant"
            >
              Large
            </Button>
          </View>

          <Button
            mode="outlined"
            onPress={() => {
              setIsNavigating(true);
              navigation.navigate('Space');
            }}
            style={styles.skipButton}
            labelStyle={styles.skipButtonText}
            disabled={isNavigating}
            accessibilityLabel="Skip to Space screen"
          >
            SKIP
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default React.memo(SizeScreen);
