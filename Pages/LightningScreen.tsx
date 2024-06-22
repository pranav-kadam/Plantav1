import React from 'react';
import { View, ImageBackground, SafeAreaView } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './assets/styles';

const LightingScreen = ({ navigation, formData, setFormData }) => {
  const progress = 1 / 7; // Update this index based on the current screen

  return (
    <ImageBackground source={require('./assets/bk.gif')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ProgressBar progress={progress} color="#F4EAD5" style={styles.progressBar} />
          <Text style={styles.question}>What kind of lighting is present in the room?</Text>
          <View style={styles.buttonGroup}>
            <Button
              mode={formData.lighting === 'Natural Light' ? 'contained' : 'outlined'}
              onPress={() => {
                setFormData({ ...formData, lighting: 'Natural Light' });
                navigation.navigate('Humidity');
              }}
              style={styles.optionButton}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              icon={() => <Icon name="weather-sunny" size={20} color="#F4EAD5" />}
            >
              Natural Light
            </Button>
            <Button
              mode={formData.lighting === 'Artificial Light' ? 'contained' : 'outlined'}
              onPress={() => {
                setFormData({ ...formData, lighting: 'Artificial Light' });
                navigation.navigate('Humidity');
              }}
              style={styles.optionButton}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              icon={() => <Icon name="lightbulb" size={20} color="#F4EAD5" />}
            >
              Artificial Light
            </Button>
          </View>
          
          <Button 
            mode="outlined" 
            onPress={() => navigation.navigate('Humidity')} 
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

export default LightingScreen;