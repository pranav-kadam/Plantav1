import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <ImageBackground source={require('./assets/bg11.png')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Your Plant Pal</Text>
             </View>
          <Card style={styles.resultCard}>
            <Card.Content>
              <Text style={styles.resultText}>{resultText.replace(/\*/g, ' ')}</Text>
            </Card.Content>
          </Card>
          
          <Text style={styles.subtitle}>Your Preferences</Text>
          <Card style={styles.preferencesCard}>
            <Card.Content>
              {Object.entries(formData).map(([key, value]) => (
                <View key={key} style={styles.preferenceItem}>
                  <Icon name={getIconName(key)} size={24} color="#A084CA" />
                  <Text style={styles.preferenceText}>{`${key}: ${value}`}</Text>
                </View>
              ))}
            </Card.Content>
          </Card>
          
          <Button 
            mode="contained" 
            onPress={() => navigation.navigate('Home')} 
            style={styles.homeButton}
            labelStyle={styles.buttonText}
          >
            Back to Home
          </Button>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const getIconName = (key: string): string => {
  const iconMap: {[key: string]: string} = {
    lighting: 'white-balance-sunny',
    humidity: 'water-percent',
    size: 'ruler',
    space: 'home',
    wateringNeeds: 'watering-can',
    purpose: 'flower',
    aesthetics: 'palette',
  };
  return iconMap[key] || 'leaf';
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  content: {
    flexGrow: 1,
    padding: 24,
  },
  progressBar: {
    marginBottom: 24,
    height: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5B4B8A',
    fontFamily: 'Cursive',
    marginTop: 40
  },
  resultCard: {
    marginBottom: 24,
    elevation: 4,
  },
  resultText: {
    fontSize: 18,
    color: '#333',
    lineHeight: 24,
    fontFamily: 'Cursive',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#5B4B8A',
    fontFamily: 'Cursive',
  },
  preferencesCard: {
    marginBottom: 24,
    elevation: 4,
  },
  preferenceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  preferenceText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
    fontFamily: 'Cursive',
  },
  homeButton: {
    marginTop: 24,
    backgroundColor: '#A084CA',
    paddingVertical: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Cursive',
  },
});

export default Result;


//Brazilian woman watering plant, Lo-Fi aesthetic, gardening, subdued pastel tones, darkish lighting, sunset, christ de redeemer in background, highly detailed, sharp focus, cinematic still, dynamic composition, magical, beautiful, stunning, brave, passionate, mystical, cute, generous, dramatic, expressive, marvelous, thought, fancy, pretty, attractive, epic