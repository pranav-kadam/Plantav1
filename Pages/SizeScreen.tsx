import React from 'react';
import { ImageBackground, View, SafeAreaView } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import styles from './assets/styles';

const SizeScreen = ({ navigation, formData, setFormData }) => {
  const progress = 4 / 9; // Update this index based on the current screen

  return (
    <ImageBackground source={require('./assets/bg2.png')} style={styles.background}>
        <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ProgressBar progress={progress} color="#fff" style={styles.progressBar} />
        <Text style={styles.question}>What is the size of the plant are you looking for?</Text>
        <View style={styles.buttonGroup}>
          <Button
            mode={formData.size === 'small' ? 'contained' : 'outlined'}
            onPress={() => {
              setFormData({ ...formData, size: 'small' });
              navigation.navigate('Space'); // Navigate to the next screen
            }}
            style={styles.optionButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonText}
           >
            Small
          </Button>
          <Button
            mode={formData.size === 'medium' ? 'contained' : 'outlined'}
            onPress={() => {
              setFormData({ ...formData, size: 'medium' });
              navigation.navigate('Space'); // Navigate to the next screen
            }}
            style={styles.optionButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonText}
           >
            Medium
          </Button>
          <Button
            mode={formData.size === 'large' ? 'contained' : 'outlined'}
            onPress={() => {
              setFormData({ ...formData, size: 'large' });
              navigation.navigate('Space'); // Navigate to the next screen
            }}
            style={styles.optionButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonText}
            >
            Large
          </Button>
        </View>

        <Button 
        mode="contained" 
        onPress={() => navigation.navigate('Space')} 
        style={styles.skipButton} 
        labelStyle={styles.skipButtonText}>
          SKIP
        </Button>
      </View>
      </SafeAreaView>
      </ImageBackground>
  );
};


export default SizeScreen;
