import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import { Text, Button, Provider as PaperProvider, Title} from 'react-native-paper';
import { GoogleGenerativeAI } from '@google/generative-ai';
import MyComponent from './Components/MyComponent';

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
    formData: FormData;
    setFormData: (formData: FormData) => void;
  }

  const Header: React.FC = () => (
    <View style={styles.headerContainer}>
      <Title style={styles.headerTitle}>PLANTA</Title>
    </View>
  );
  
  const Home = () => {
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
  
    //const [temperature, setTemperature] = useState('');
    const [text, setText] = useState('');
  
    /* useEffect(() => {
      const getTemperature = async () => {
        const temp = await fetchTemperature();
        setTemperature(temp);
      };
      getTemperature();
    }, []); */
  
    const handleSubmit = async () => {
      try {
        const modelResponse = await generatePlantRecommendation();
        setText(modelResponse);
      } catch (error) {
        console.error('Error generating plant recommendation:', error);
        setText('Failed to get plant recommendation.');
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
              <Button mode="contained" onPress={handleSubmit} labelStyle={styles.rec} style={styles.button}>
                Get Recommendation
              </Button>
              <Text>{text}</Text>
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
      backgroundColor: '#fbeee0', // Off-white background
      padding: 10,
      borderRadius: 8,
      shadowColor: '#422800',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      
    },
    button: {
      marginTop: 16,
      marginVertical: 2,
      flex: 1,
      marginHorizontal: 2,
      backgroundColor: '#000', // Primary color
      borderRadius: 10, // Rounded corners
      shadowColor: 'rgba(0, 0, 0, 0.25)', // Shadow color
      shadowOffset: { width: 0, height: 4 }, // Shadow offset
      shadowOpacity: 0.8, // Shadow opacity
      shadowRadius: 6, // Shadow radius
      elevation: 5, // Android shadow
      paddingVertical: 20, // Vertical padding
      paddingHorizontal: 16, // Horizontal padding
      justifyContent: 'center', // Center the content vertically
      alignItems: 'center', // Center the content horizontally
    },
    rec: {
      color: '#FFF', // White text color
      fontSize: 18, // Text size
      fontWeight: 'bold', // Text weight
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
      backgroundColor: 'rgb(255, 198, 41)', // Primary color
      borderRadius: 10, // Rounded corners
      shadowColor: 'rgba(0, 0, 0, 0.25)', // Shadow color
      shadowOffset: { width: 0, height: 4 }, // Shadow offset
      shadowOpacity: 0.8, // Shadow opacity
      shadowRadius: 6, // Shadow radius
      elevation: 5, // Android shadow
      paddingVertical: 20, // Vertical padding
      paddingHorizontal: 16, // Horizontal padding
      justifyContent: 'center', // Center the content vertically
      alignItems: 'center', // Center the content horizontally
    },
    
    buttonText: {
      
      color: '#422800', // White text color
      fontSize: 18, // Text size
      fontWeight: 'bold', // Text weight
    },
    
    headerContainer: {
      height: 40,
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
