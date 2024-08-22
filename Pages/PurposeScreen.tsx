import React, { useState } from 'react';
import { ImageBackground, View, SafeAreaView } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import styles from './assets/styles';

const PurposeScreen = ({ navigation, formData, setFormData }) => {
  const progress = 7 / 9;
  const [isNavigating, setIsNavigating] = useState(false);

  const handlePress = (purpose) => {
    setFormData({ ...formData, purpose });
    setIsNavigating(true);
    navigation.navigate('Flowering');
  };

  return (
    <ImageBackground source={require('./assets/bg6.png')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ProgressBar progress={progress} color="#fff" style={styles.progressBar} />
          <Text style={styles.question}>What is the primary purpose of the plant?</Text>
          <View style={styles.buttonGroup}>
            <Button
              mode={formData.purpose === 'decoration' ? 'contained' : 'outlined'}
              onPress={() => handlePress('decoration')}
              style={[styles.optionButton, formData.purpose === 'decoration' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              disabled={isNavigating}
              accessibilityLabel="Decoration"
            >
              Decoration
            </Button>
            <Button
              mode={formData.purpose === 'airPurification' ? 'contained' : 'outlined'}
              onPress={() => handlePress('airPurification')}
              style={[styles.optionButton, formData.purpose === 'airPurification' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              disabled={isNavigating}
              accessibilityLabel="Air Purification"
            >
              Air Purification
            </Button>
            <Button
              mode={formData.purpose === 'edible' ? 'contained' : 'outlined'}
              onPress={() => handlePress('edible')}
              style={[styles.optionButton, formData.purpose === 'edible' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              disabled={isNavigating}
              accessibilityLabel="Edible"
            >
              Edible
            </Button>
          </View>

          <Button
            mode="contained"
            onPress={() => {
              setIsNavigating(true);
              navigation.navigate('Flowering');
            }}
            style={styles.skipButton}
            labelStyle={styles.skipButtonText}
            disabled={isNavigating}
            accessibilityLabel="Skip to Flowering screen"
          >
            SKIP
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default React.memo(PurposeScreen);
