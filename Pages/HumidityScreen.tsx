import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HumidityScreen = ({ navigation, formData, setFormData }) => (
  <View style={styles.container}>
    <Text style={styles.question}>What is the humidity level in your room?</Text>
    <View style={styles.buttonGroup}>
      <Button
        mode={formData.humidity === 'low' ? 'contained' : 'outlined'}
        onPress={() => {setFormData({ ...formData, humidity: 'low' })
        navigation.navigate('Size'); }}
        style={styles.optionButton}
        labelStyle={styles.buttonText}
        icon={() => <Icon name="water-off" size={20} />}
      >
        Low (&lt;20%)
      </Button>
      <Button
        mode={formData.humidity === 'medium' ? 'contained' : 'outlined'}
        onPress={() => {setFormData({ ...formData, humidity: 'medium' })
        navigation.navigate('Size'); 
      }}
        style={styles.optionButton}
        labelStyle={styles.buttonText}
        icon={() => <Icon name="water" size={20} />}
      >
        Normal (20%-60%)
      </Button>
      <Button
        mode={formData.humidity === 'high' ? 'contained' : 'outlined'}
        onPress={() =>{ setFormData({ ...formData, humidity: 'high' })
        navigation.navigate('Size'); }}
        style={styles.optionButton}
        labelStyle={styles.buttonText}
        icon={() => <Icon name="water-plus" size={20} />}
      >
        High (&gt;60%)
      </Button>
    </View>

    <Button mode="contained" onPress={() => navigation.navigate('Size')} style={styles.nextButton}>
      Next
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
    marginVertical: 8,
    color: '#422800',
    backgroundColor: '#fbeee0',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#422800',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
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

export default HumidityScreen;
