import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AestheticsScreen = ({ navigation, formData, setFormData }) => (
  <View style={styles.container}>
    <Text style={styles.question}>What kind of aesthetics do you prefer?</Text>
    <View style={styles.buttonGroup}>
      <Button
        mode={formData.aesthetics === 'modern' ? 'contained' : 'outlined'}
        onPress={() => {setFormData({ ...formData, aesthetics: 'modern' })
        navigation.navigate('Results')}}
        style={styles.optionButton}
        labelStyle={styles.buttonText}
        icon={() => <Icon name="brush" size={20} />}
      >
        Modern
      </Button>
      <Button
        mode={formData.aesthetics === 'classic' ? 'contained' : 'outlined'}
        onPress={() => {setFormData({ ...formData, aesthetics: 'classic' })
        navigation.navigate('Results')}}
        style={styles.optionButton}
        labelStyle={styles.buttonText}
        icon={() => <Icon name="vector-square" size={20} />}
      >
        Classic
      </Button>
      <Button
        mode={formData.aesthetics === 'tropical' ? 'contained' : 'outlined'}
        onPress={() => {setFormData({ ...formData, aesthetics: 'tropical' })
        navigation.navigate('Results')}}
        style={styles.optionButton}
        labelStyle={styles.buttonText}
        icon={() => <Icon name="pine-tree" size={20} />}
      >
        Tropical
      </Button>
    </View>

    <Button mode="contained" onPress={() => navigation.navigate('Results')} style={styles.nextButton}>
      Submit
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

export default AestheticsScreen;