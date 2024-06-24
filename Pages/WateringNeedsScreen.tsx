import React from 'react';
import { ImageBackground, View,SafeAreaView } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import styles from './assets/styles';

const WateringNeedsScreen = ({ navigation, formData, setFormData }) => {
  const progress = 6 / 9; 

  return (
    <ImageBackground source={require('./assets/bg4.png')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ProgressBar progress={progress} color="#fff" style={styles.progressBar} />
        <Text style={styles.question}>How often do you want to water your plant?</Text>
        <View style={styles.buttonGroup}>
          <Button
            mode={formData.wateringNeeds === 'daily' ? 'contained' : 'outlined'}
            onPress={() => {
              setFormData({ ...formData, wateringNeeds: 'daily' });
              navigation.navigate('Purpose');
            }}
            style={styles.optionButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonText}
            >
            Daily
          </Button>
          <Button
            mode={formData.wateringNeeds === 'weekly' ? 'contained' : 'outlined'}
            onPress={() => {
              setFormData({ ...formData, wateringNeeds: 'weekly' });
              navigation.navigate('Purpose');
            }}
            style={styles.optionButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonText}
            >
            Weekly
          </Button>
          <Button
            mode={formData.wateringNeeds === 'monthly' ? 'contained' : 'outlined'}
            onPress={() => {
              setFormData({ ...formData, wateringNeeds: 'monthly' });
              navigation.navigate('Purpose');
            }}
            style={styles.optionButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonText}
          >
            Monthly
          </Button>
        </View>

        <Button 
        mode="contained" 
        onPress={() => navigation.navigate('Purpose')} 
        style={styles.skipButton}
        labelStyle={styles.skipButtonText}>
          SKIP
        </Button>
      </View>
      </SafeAreaView>
      </ImageBackground>
  );
};

export default WateringNeedsScreen;
