import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GoogleGenerativeAI } from '@google/generative-ai';

const AestheticsScreen = ({ navigation, formData, setFormData }) => {
  const [text, setText] = useState('');

  const handleSubmit = async () => {
    try {
      const modelResponse = await generatePlantRecommendation();
      const resultText = modelResponse;
      navigation.navigate('Results', { formData, resultText }); // Pass formData and resultText
    } catch (error) {
      console.error('Error generating plant recommendation:', error);
      const resultText = 'Failed to get plant recommendation.';
      navigation.navigate('Results', { formData, resultText }); // Pass formData and resultText
    }
  };
  

  const generatePlantRecommendation = async () => {
    const genAI = new GoogleGenerativeAI('AIzaSyAdkpv6uNy4pm1natsKdBdklUcSdyEW2TE');
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = `I have a room with ${formData.lighting} lighting, ${formData.humidity} humidity, and a temperature of 25 degrees Celsius. The space is ${formData.space}. The size I'm looking for is ${formData.size}. I need a plant with ${formData.wateringNeeds} watering needs. The purpose of the plant is ${formData.purpose}, and I prefer ${formData.aesthetics} aesthetics. Can you recommend a houseplant for me?`;
    const result = await model.generateContent(prompt);
    return result.response.text();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>What kind of aesthetics do you prefer?</Text>
      <View style={styles.buttonGroup}>
        <Button
          mode={formData.aesthetics === 'modern' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, aesthetics: 'modern' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="brush" size={20} />}
        >
          Modern
        </Button>
        <Button
          mode={formData.aesthetics === 'classic' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, aesthetics: 'classic' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="vector-square" size={20} />}
        >
          Classic
        </Button>
        <Button
          mode={formData.aesthetics === 'tropical' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, aesthetics: 'tropical' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="pine-tree" size={20} />}
        >
          Tropical
        </Button>
      </View>

      <Button mode="contained" onPress={handleSubmit} style={styles.nextButton}>
        Submit
      </Button>
    </View>
  );
};

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
