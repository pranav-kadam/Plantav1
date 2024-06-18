import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { GoogleGenerativeAI } from '@google/generative-ai';

type RootStackParamList = {

  Results: { formData: FormData };
};

type ResultScreenRouteProp = RouteProp<RootStackParamList, 'Results'>;

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

interface Props {
  route: ResultScreenRouteProp;
}

const Result: React.FC<Props> = ({ route }) => {
  const { formData } = route.params;
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generatePlantRecommendation = async () => {
      try {
        const genAI = new GoogleGenerativeAI('AIzaSyAdkpv6uNy4pm1natsKdBdklUcSdyEW2TE');
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const prompt = `I have a room with ${formData.lighting} lighting, ${formData.humidity} humidity, and a temperature of 25 degrees Celsius. The space is ${formData.space}. The size I'm looking for is ${formData.size}. I need a plant with ${formData.wateringNeeds} watering needs. The purpose of the plant is ${formData.purpose}, and I prefer ${formData.aesthetics} aesthetics. Can you recommend a houseplant for me?`;
        const result = await model.generateContent(prompt);
        setRecommendation(result.response.text());
      } catch (error) {
        console.error('Error generating plant recommendation:', error);
        setRecommendation('Failed to fetch recommendation. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    generatePlantRecommendation();
  }, [formData]);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          {loading ? (
            <ActivityIndicator size="large" color="#2E8B57" />
          ) : (
            <Text style={styles.recommendationText}>{recommendation}</Text>
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFAF0',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recommendationText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#2E8B57',
    marginVertical: 16,
    paddingHorizontal: 20,
    lineHeight: 28,
    fontFamily: 'Helvetica',
    backgroundColor: '#FFF8DC',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default Result;
