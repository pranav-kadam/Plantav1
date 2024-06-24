import React from 'react';
import { View, ImageBackground, SafeAreaView } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import styles from './assets/styles';

const FloweringScreen = ({ navigation, formData, setFormData }) => {
  const progress =  8/ 9;  // Adjust this based on the screen's position in your flow

  return (
    <ImageBackground source={require('./assets/bg10.png')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ProgressBar progress={progress} color="#F4EAD5" style={styles.progressBar} />
          <Text style={styles.question}>Do you prefer flowering plants?</Text>
          <View style={styles.buttonGroup}>
            <Button
              mode={formData.flowering === 'Yes' ? 'contained' : 'outlined'}
              onPress={() => {
                setFormData({ ...formData, flowering: 'Yes' });
                navigation.navigate('Aesthetics');
              }}
              style={[styles.optionButton, formData.flowering === 'Yes' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
            >
              Yes
            </Button>
            <Button
              mode={formData.flowering === 'No' ? 'contained' : 'outlined'}
              onPress={() => {
                setFormData({ ...formData, flowering: 'No' });
                navigation.navigate('Aesthetics');
              }}
              style={[styles.optionButton, formData.flowering === 'No' && styles.selectedButton]}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
            >
              No
            </Button>
          </View>
          
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('Aesthetics')}
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

export default FloweringScreen;