import React from 'react';
import { ImageBackground, View, SafeAreaView } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import styles from './assets/styles';

const SpaceScreen = ({ navigation, formData, setFormData }) => {
  const progress = 5 / 9; // Update this index based on the current screen

  return (
    <ImageBackground source={require('./assets/bg3.png')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ProgressBar progress={progress} color="#fff" style={styles.progressBar} />
        <Text style={styles.question}>Will the pant be placed indoors or outdoors?</Text>
        <View style={styles.buttonGroup}>
          <Button
            mode={formData.space === 'indoor' ? 'contained' : 'outlined'}
            onPress={() => {
              setFormData({ ...formData, space: 'indoor' });
              navigation.navigate('WateringNeeds'); // Navigate to the next screen
            }}
            style={styles.optionButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonText}
          >
            Indoor
          </Button>
          <Button
            mode={formData.space === 'outdoor' ? 'contained' : 'outlined'}
            onPress={() => {
              setFormData({ ...formData, space: 'outdoor' });
              navigation.navigate('WateringNeeds'); // Navigate to the next screen
            }}
            style={styles.optionButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonText}
           >
            Outdoor
          </Button>
        </View>

        <Button 
        mode="contained" 
        onPress={() => navigation.navigate('WateringNeeds')} 
        style={styles.skipButton}
        labelStyle={styles.skipButtonText}>
          SKIP
        </Button>
      </View>
      </SafeAreaView>
      </ImageBackground>
  
  );
};

export default SpaceScreen;
