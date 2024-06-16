// Home.tsx
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Provider as PaperProvider, Title } from 'react-native-paper';
import { GoogleGenerativeAI } from '@google/generative-ai';
import MyComponent from './Components/MyComponent';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Results: { recommendation: string };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface FormData {
  lighting: string;
  lightingDetail: string;
  humidity: string;
  size: string;
  space: string;
  wateringNeeds: string;
  purpose: string;
  aesthetics: string;
}

const Header: React.FC = () => (
  <View style={styles.headerContainer}>
    <Title style={styles.headerTitle}>PLANTA</Title>
  </View>
);

const Home: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    lighting: '',
    lightingDetail: '',
    humidity: '',
    size: '',
    space: '',
    wateringNeeds: '',
    purpose: '',
    aesthetics: '',
  });

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleSubmit = async () => {
    try {
      const modelResponse = await generatePlantRecommendation();
      navigation.navigate('Results', { recommendation: modelResponse });  // Updated screen name here
    } catch (error) {
      console.error('Error generating plant recommendation:', error);
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
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView style={styles.scrollView}>
          <MyComponent formData={formData} setFormData={setFormData} />
          <View style={styles.buttonWrapper}>
            <Button mode="contained" onPress={handleSubmit} style={styles.button}>
              Get Recommendation
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  scrollView: {
    marginHorizontal: 15,
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
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  button: {
    width: '75%',
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
  rec: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonGroup: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  optionButton: {
    marginVertical: 2,
    flex: 1,
    marginHorizontal: 2,
    backgroundColor: 'rgb(255, 198, 41)',
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
    color: '#422800',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerContainer: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#E0115F',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Home;
