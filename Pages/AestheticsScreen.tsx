import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { GoogleGenerativeAI } from '@google/generative-ai';

const AestheticsScreen = ({ navigation, formData, setFormData }) => {
  const [text, setText] = useState('');

  const handleSubmit = async () => {
    try {
      const modelResponse = await generatePlantRecommendation();
      const resultText = modelResponse;
      navigation.navigate('Results', { formData, resultText });
    } catch (error) {
      console.error('Error generating plant recommendation:', error);
      const resultText = 'Failed to get plant recommendation.';
      navigation.navigate('Results', { formData, resultText });
    }
  };

  const generatePlantRecommendation = async () => {
    const genAI = new GoogleGenerativeAI('AIzaSyAdkpv6uNy4pm1natsKdBdklUcSdyEW2TE');
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = `I have a room with ${formData.lighting} lighting, ${formData.humidity} humidity, and a temperature of 25 degrees Celsius. The space is ${formData.space}. The size I'm looking for is ${formData.size}. I need a plant with ${formData.wateringNeeds} watering needs. The purpose of the plant is ${formData.purpose}, and I prefer ${formData.aesthetics} aesthetics. Can you recommend a houseplant for me? Make a plant care schedule for the recommended plant`;
    const result = await model.generateContent(prompt);
    return result.response.text();
  };

  const progress = 8 / 8; // Update this index based on the current screen

  return (
    <LinearGradient
      colors={['#ff9a9e', '#fad0c4', '#fad0c4', '#fad0c4']}
      style={styles.container}
    >
      <View style={styles.content}>
        <ProgressBar progress={progress} color="#fff" style={styles.progressBar} />
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

export default AestheticsScreen;
