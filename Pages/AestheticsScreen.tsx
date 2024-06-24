import React, { useState } from 'react';
import { ImageBackground, View, SafeAreaView } from 'react-native';
import { Text, Button, ProgressBar, ActivityIndicator } from 'react-native-paper';
import { GoogleGenerativeAI } from '@google/generative-ai';
import styles from './assets/styles';

const AestheticsScreen = ({ navigation, formData, setFormData }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const modelResponse = await generatePlantRecommendation();
      const resultText = modelResponse;
      setIsLoading(false);
      navigation.navigate('Results', { formData, resultText });
    } catch (error) {
      console.error('Error generating plant recommendation:', error);
      const resultText = 'Try again in an hour';
      setIsLoading(false);
      navigation.navigate('Results', { formData, resultText });
    }
  };

  const generatePlantRecommendation = async () => {
    const genAI = new GoogleGenerativeAI('AIzaSyAdkpv6uNy4pm1natsKdBdklUcSdyEW2TE');
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = `I'm looking for a houseplant recommendation based on the following criteria:
    1. Lighting: ${formData.lighting} (e.g., bright indirect, low light, full sun)  
    2. Humidity: ${formData.humidity}
    3. Temperature: ${formData.temperature}
    4. Available space: ${formData.space}
    5. Desired plant size: ${formData.size} 
    6. Watering needs: ${formData.wateringNeeds}
    7. Purpose: ${formData.purpose}
    8. Flowering Needs: ${formData.flowering}
    9. Preferred aesthetics: ${formData.aesthetics}
    Based on these specifications, please recommend a suitable houseplant. Provide a detailed plant care plan, including:
    1. Plant name (common and scientific)
    2. Brief description
    3. Optimal care conditions (light, water, humidity, temperature)
    4. Fertilization schedule
    5. Pruning/grooming needs
    6. Potential issues and solutions
    7. Growth rate and expected size at maturity
    8. Propagation methods
    9. Timelines:
        a. Watering frequency
        b. Fertilization frequency
        c. Repotting frequency
        d. Expected time to reach mature size
    Please ensure the recommendation takes into account all provided criteria and offers a well-rounded solution for the user's specific needs and environment.
    Also recommend youtube video links about taking care of this plant.`;   const result = await model.generateContent(prompt);
    return result.response.text();
  };

  const progress = 9/9;

  return (
    <ImageBackground source={require('./assets/bg7.png')} style={styles.background}>
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
             >
              Modern
            </Button>
            <Button
              mode={formData.aesthetics === 'classic' ? 'contained' : 'outlined'}
              onPress={() => setFormData({ ...formData, aesthetics: 'classic' })}
              style={styles.optionButton}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
            >
              Classic
            </Button>
            <Button
              mode={formData.aesthetics === 'tropical' ? 'contained' : 'outlined'}
              onPress={() => setFormData({ ...formData, aesthetics: 'tropical' })}
              style={styles.optionButton}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonText}
              >
              Tropical
            </Button>
          </View>
          
          {isLoading ? (
            <ActivityIndicator animating={true} color="#fff" size="large" />
          ) : (
            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles.skipButton}
              labelStyle={styles.skipButtonText}
            >
              Submit
            </Button>
          )}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AestheticsScreen;