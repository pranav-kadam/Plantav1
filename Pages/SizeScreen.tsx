import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const SizeScreen = ({ navigation, formData, setFormData }) => {
  const progress = 3 / 7; // Update this index based on the current screen

  return (
    <LinearGradient
      colors={['#ff9a9e', '#fad0c4', '#fad0c4', '#fad0c4']}
      style={styles.container}
    >
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

        <Button mode="contained" onPress={() => navigation.navigate('Space')} style={styles.nextButton}>
          SKIP
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

export default SizeScreen;
