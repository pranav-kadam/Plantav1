import React from 'react';
import { ImageBackground, View, SafeAreaView } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './assets/styles';

const PurposeScreen = ({ navigation, formData, setFormData }) => {
  const progress = 6 / 7; // Update this index based on the current screen

  return (
    <ImageBackground source={require('./assets/bk.gif')} style={styles.background}>
       <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ProgressBar progress={progress} color="#fff" style={styles.progressBar} />
        <Text style={styles.question}>What is the primary purpose of the plant?</Text>
        <View style={styles.buttonGroup}>
          <Button
            mode={formData.purpose === 'decoration' ? 'contained' : 'outlined'}
            onPress={() => {
              setFormData({ ...formData, purpose: 'decoration' });
              navigation.navigate('Aesthetics'); // Navigate to the next screen
            }}
            style={styles.optionButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonText}
            icon={() => <Icon name="palette" size={20} />}
          >
            Decoration
          </Button>
          <Button
            mode={formData.purpose === 'airPurification' ? 'contained' : 'outlined'}
            onPress={() => {
              setFormData({ ...formData, purpose: 'airPurification' });
              navigation.navigate('Aesthetics'); // Navigate to the next screen
            }}
            style={styles.optionButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonText}
            icon={() => <Icon name="air-filter" size={20} />}
          >
            Air Purification
          </Button>
          <Button
            mode={formData.purpose === 'edible' ? 'contained' : 'outlined'}
            onPress={() => {
              setFormData({ ...formData, purpose: 'edible' });
              navigation.navigate('Aesthetics'); // Navigate to the next screen
            }}
            style={styles.optionButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonText}
            icon={() => <Icon name="food-apple-outline" size={20} />}
          >
            Edible
          </Button>
        </View>

        <Button 
        mode="contained" 
        onPress={() => navigation.navigate('Aesthetics')} 
        style={styles.skipButton}
        labelStyle={styles.skipButtonText}>
          SKIP
        </Button>
      </View>
      </SafeAreaView>
      </ImageBackground>
    
  );
};

export default PurposeScreen;
