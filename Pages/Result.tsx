import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type FormData = {
  lighting: string;
  lightingDetail: string;
  humidity: string;
  size: string;
  space: string;
  wateringNeeds: string;
  purpose: string;
  aesthetics: string;
};

type RootStackParamList = {
  Home: undefined;
  Lighting: undefined;
  Humidity: undefined;
  Size: undefined;
  Space: undefined;
  WateringNeeds: undefined;
  Purpose: undefined;
  Aesthetics: undefined;
  Results: { formData: FormData; resultText: string } | undefined;
};

type ResultsScreenProps = NativeStackScreenProps<RootStackParamList, 'Results'>;

const Result: React.FC<ResultsScreenProps> = ({ route, navigation }) => {
  const { formData, resultText } = route.params ?? {
    formData: {
      lighting: '',
      lightingDetail: '',
      humidity: '',
      size: '',
      space: '',
      wateringNeeds: '',
      purpose: '',
      aesthetics: '',
    },
    resultText: 'No recommendation available.',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Plant Recommendation</Text>
      <Text style={styles.resultText}>{resultText}</Text>

      <Text style={styles.subtitle}>Your Preferences:</Text>
      <View style={styles.preferencesContainer}>
        <Text style={styles.preferenceText}>Lighting: {formData.lighting}</Text>
        <Text style={styles.preferenceText}>Lighting Detail: {formData.lightingDetail}</Text>
        <Text style={styles.preferenceText}>Humidity: {formData.humidity}</Text>
        <Text style={styles.preferenceText}>Size: {formData.size}</Text>
        <Text style={styles.preferenceText}>Space: {formData.space}</Text>
        <Text style={styles.preferenceText}>Watering Needs: {formData.wateringNeeds}</Text>
        <Text style={styles.preferenceText}>Purpose: {formData.purpose}</Text>
        <Text style={styles.preferenceText}>Aesthetics: {formData.aesthetics}</Text>
      </View>

      <Button mode="contained" onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
        Back to Home
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#422800',
  },
  resultText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#422800',
  },
  preferencesContainer: {
    marginBottom: 24,
  },
  preferenceText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  homeButton: {
    marginTop: 16,
    backgroundColor: '#000',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Result;
