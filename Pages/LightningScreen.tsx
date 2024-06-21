import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LightingScreen = ({ navigation, formData, setFormData }) => {
  const progress = 1 / 7; // Update this index based on the current screen

  return (
    <ImageBackground source={require('./assets/bk.gif')} style={styles.container}>
      <View style={styles.content}>
        <ProgressBar progress={progress} color="#fff" style={styles.progressBar} />
        <Text style={styles.question}>What kind of lighting is present in the room?</Text>
        <View style={styles.buttonGroup}>
          <Button
            mode={formData.lighting === 'Natural Light' ? 'contained' : 'outlined'}
            onPress={() => {
              setFormData({ ...formData, lighting: 'Natural Light' });
              navigation.navigate('Humidity'); // Navigate to the next screen
            }}
            style={styles.optionButton}
            labelStyle={styles.buttonText}
            icon={() => <Icon name="weather-sunny" size={20} />}
          >
            Natural Light
          </Button>
          <Button
            mode={formData.lighting === 'Artificial Light' ? 'contained' : 'outlined'}
            onPress={() => {
              setFormData({ ...formData, lighting: 'Artificial Light' });
              navigation.navigate('Humidity'); // Navigate to the next screen
            }}
            style={styles.optionButton}
            labelStyle={styles.buttonText}
            icon={() => <Icon name="lightbulb" size={20} />}
          >
            Artificial Light
          </Button>
        </View>

        <Button mode="contained" onPress={() => navigation.navigate('Humidity')} style={styles.skipButton}>
          SKIP
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    justifyContent: 'flex-start',
    padding: 16,
  },
  progressBar: {
    marginTop: 150,
    height: 10,
    borderRadius: 5,
    marginVertical: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#422800',
    backgroundColor: '#fbeee0',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  optionButton: {
    marginTop: 16,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'SpicyRice-Regular.ttf'
  },
  skipButton: {
    marginTop: 16,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6F61',
  },
});

export default LightingScreen;
