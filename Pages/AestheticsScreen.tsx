import React from 'react';
import { ImageBackground, View, SafeAreaView } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GoogleGenerativeAI } from '@google/generative-ai';
import styles from './assets/styles';

const AestheticsScreen = ({ navigation, formData, setFormData }) => {
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

  const progress = 7 / 7; // Update this index based on the current screen

  return (
    <ImageBackground source={require('./assets/bk.gif')} style={styles.background}>
        <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ProgressBar progress={progress} color="#fff" style={styles.progressBar} />
        <Text style={styles.question}>What kind of aesthetics do you prefer?</Text>
        <View style={styles.buttonGroup}>
          <Button
            mode={formData.aesthetics === 'modern' ? 'contained' : 'outlined'}
            onPress={() => setFormData({ ...formData, aesthetics: 'modern' })}
            style={styles.optionButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonText}
            icon={() => <Icon name="brush" size={20} />}
          >
            Modern
          </Button>
          <Button
            mode={formData.aesthetics === 'classic' ? 'contained' : 'outlined'}
            onPress={() => setFormData({ ...formData, aesthetics: 'classic' })}
            style={styles.optionButton}
            contentStyle={styles.buttonContent}
        
            labelStyle={styles.buttonText}
            icon={() => <Icon name="vector-square" size={20} />}
          >
            Classic
          </Button>
          <Button
            mode={formData.aesthetics === 'tropical' ? 'contained' : 'outlined'}
            onPress={() => setFormData({ ...formData, aesthetics: 'tropical' })}
            style={styles.optionButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonText}
            icon={() => <Icon name="pine-tree" size={20} />}
          >
            Tropical
          </Button>
        </View>

        <Button 
        mode="contained" 
        onPress={handleSubmit} 
        style={styles.skipButton}
        labelStyle={styles.skipButtonText}>
          Submit
        </Button>
      </View>
      </SafeAreaView>
      </ImageBackground>
  );
};

export default AestheticsScreen;
