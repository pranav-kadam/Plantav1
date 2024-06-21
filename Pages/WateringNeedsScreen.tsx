import React from 'react';
import { ImageBackground, View } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './assets/styles';

const WateringNeedsScreen = ({ navigation, formData, setFormData }) => {
  const progress = 5 / 7; 

  return (
    <ImageBackground source={require('./assets/bk.gif')} style={styles.container}>
      <View style={styles.content}>
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
            labelStyle={styles.buttonText}
            icon={() => <Icon name="calendar-today" size={20} />}
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
            labelStyle={styles.buttonText}
            icon={() => <Icon name="calendar-week" size={20} />}
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
            labelStyle={styles.buttonText}
            icon={() => <Icon name="calendar-month" size={20} />}
          >
            Monthly
          </Button>
        </View>

        <Button mode="contained" onPress={() => navigation.navigate('Purpose')} style={styles.skipButton}>
          SKIP
        </Button>
      </View>
      </ImageBackground>
  );
};

export default WateringNeedsScreen;
