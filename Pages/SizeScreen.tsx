import React from 'react';
import { ImageBackground, View } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './assets/styles';

const SizeScreen = ({ navigation, formData, setFormData }) => {
  const progress = 3 / 7; // Update this index based on the current screen

  return (
    <ImageBackground source={require('./assets/bk.gif')} style={styles.container}>
      <View style={styles.content}>
        <ProgressBar progress={progress} color="#fff" style={styles.progressBar} />
        <Text style={styles.question}>What size of plant are you looking for?</Text>
        <View style={styles.buttonGroup}>
          <Button
            mode={formData.size === 'small' ? 'contained' : 'outlined'}
            onPress={() => {
              setFormData({ ...formData, size: 'small' });
              navigation.navigate('Space'); // Navigate to the next screen
            }}
            style={styles.optionButton}
            labelStyle={styles.buttonText}
            icon={() => <Icon name="sprout" size={20} />}
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
            labelStyle={styles.buttonText}
            icon={() => <Icon name="flower" size={20} />}
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
            labelStyle={styles.buttonText}
            icon={() => <Icon name="tree" size={20} />}
          >
            Large
          </Button>
        </View>

        <Button mode="contained" onPress={() => navigation.navigate('Space')} style={styles.skipButton}>
          SKIP
        </Button>
      </View>
      </ImageBackground>
  );
};


export default SizeScreen;
