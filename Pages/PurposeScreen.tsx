import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const PurposeScreen = ({ navigation, formData, setFormData }) => {
  const progress = 6 / 7; // Update this index based on the current screen

  return (
    <LinearGradient
      colors={['#ff9a9e', '#fad0c4', '#fad0c4', '#fad0c4']}
      style={styles.container}
    >
      <View style={styles.content}>
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
            labelStyle={styles.buttonText}
            icon={() => <Icon name="food-apple-outline" size={20} />}
          >
            Edible
          </Button>
        </View>

        <Button mode="contained" onPress={() => navigation.navigate('Aesthetics')} style={styles.nextButton}>
          Next
        </Button>
      </View>
    </LinearGradient>
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
    fontFamily: 'SpicyRice-Regular.ttf',
  },
  nextButton: {
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

export default PurposeScreen;
