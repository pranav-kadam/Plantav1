import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WateringNeedsScreen = ({ navigation, formData, setFormData }) => (
  <View style={styles.container}>
    <Text style={styles.question}>How often do you want to water your plant?</Text>
    <View style={styles.buttonGroup}>
      <Button
        mode={formData.wateringNeeds === 'daily' ? 'contained' : 'outlined'}
        onPress={() => {setFormData({ ...formData, wateringNeeds: 'daily' })
        navigation.navigate('Purpose')}}
        style={styles.optionButton}
        labelStyle={styles.buttonText}
        icon={() => <Icon name="calendar-today" size={20} />}
      >
        Daily
      </Button>
      <Button
        mode={formData.wateringNeeds === 'weekly' ? 'contained' : 'outlined'}
        onPress={() => {setFormData({ ...formData, wateringNeeds: 'weekly' })
        navigation.navigate('Purpose')}}
        style={styles.optionButton}
        labelStyle={styles.buttonText}
        icon={() => <Icon name="calendar-week" size={20} />}
      >
        Weekly
      </Button>
      <Button
        mode={formData.wateringNeeds === 'monthly' ? 'contained' : 'outlined'}
        onPress={() => {setFormData({ ...formData, wateringNeeds: 'monthly' })
        navigation.navigate('Purpose')}}
        style={styles.optionButton}
        labelStyle={styles.buttonText}
        icon={() => <Icon name="calendar-month" size={20} />}
      >
        Monthly
      </Button>
    </View>

    <Button mode="contained" onPress={() => navigation.navigate('Purpose')} style={styles.nextButton}>
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

export default WateringNeedsScreen;
