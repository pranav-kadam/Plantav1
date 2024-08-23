import React, { useState } from 'react';
import { ImageBackground, View, SafeAreaView } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import styles from './assets/styles';

const SpaceScreen = ({ navigation, formData, setFormData }) => {
  const progress = 5 / 9;
  const [isNavigating, setIsNavigating] = useState(false);

  const handlePress = (space) => {
    setFormData({ ...formData, space });
    setIsNavigating(true);
    navigation.navigate('WateringNeeds');
  };

  return (
    <ImageBackground source={require('./assets/bg3.png')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ProgressBar progress={progress} color="#fff" style={styles.progressBar} />
          <Text style={styles.question}>Will the plant be indoors or outdoors?</Text>
          <View style={styles.buttonGroup}>
            <Button
              mode={formData.space === 'indoor' ? 'contained' : 'outlined'}
              onPress={() => handlePress('indoor')}
              style={[styles.optionButton, formData.space === 'indoor' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              disabled={isNavigating}
              accessibilityLabel="Indoor"
            >
              Indoor
            </Button>
            <Button
              mode={formData.space === 'outdoor' ? 'contained' : 'outlined'}
              onPress={() => handlePress('outdoor')}
              style={[styles.optionButton, formData.space === 'outdoor' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              disabled={isNavigating}
              accessibilityLabel="Outdoor"
            >
              Outdoor
            </Button>
          </View>

          <Button
            mode="contained"
            onPress={() => {
              setIsNavigating(true);
              navigation.navigate('WateringNeeds');
            }}
            style={styles.skipButton}
            labelStyle={styles.skipButtonText}
            disabled={isNavigating}
            accessibilityLabel="Skip to Watering Needs screen"
          >
            SKIP
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default React.memo(SpaceScreen);
