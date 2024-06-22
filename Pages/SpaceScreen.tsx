import React from 'react';
import { ImageBackground, View, SafeAreaView } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './assets/styles';

const SpaceScreen = ({ navigation, formData, setFormData }) => {
  const progress = 4 / 7; // Update this index based on the current screen

  return (
    <ImageBackground source={require('./assets/bk.gif')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ProgressBar progress={progress} color="#fff" style={styles.progressBar} />
        <Text style={styles.question}>What type of space is available for the plant?</Text>
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
            icon={() => <Icon name="home-outline" size={20} />}
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
            icon={() => <Icon name="nature" size={20} />}
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
