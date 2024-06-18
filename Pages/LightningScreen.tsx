import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LightingScreen = ({ navigation, formData, setFormData }) => (
  <View style={styles.container}>
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

    <Button mode="contained" onPress={() => navigation.navigate('Humidity')} style={styles.nextButton}>
      SKIP
    </Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#422800',
    backgroundColor: '#fbeee0',
    padding: 10,
  },
  buttonGroup: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  optionButton: {
    marginTop: 16,
    backgroundColor: '#000',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
    paddingVertical: 20,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nextButton: {
    marginTop: 16,
    backgroundColor: '#000',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
    paddingVertical: 20,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LightingScreen;
