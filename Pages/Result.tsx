import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

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

  const progress = 1; // Progress bar indicates completion

  return (
    <LinearGradient
      colors={['#ff9a9e', '#fad0c4', '#fad0c4', '#fad0c4']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <ProgressBar progress={progress} color="#fff" style={styles.progressBar} />
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
    marginTop: 50,
    height: 10,
    borderRadius: 5,
    marginVertical: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#422800',
    textAlign: 'center',
  },
  resultText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 24,
    textAlign: 'center',
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
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Result;
