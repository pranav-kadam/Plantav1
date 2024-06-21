import React from 'react';
import {  StyleSheet, View } from 'react-native';
import { Text, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Example icon set


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
  
  const MyComponent: React.FC<Props> = ({ formData, setFormData }) => (
    <View>
      <Text style={styles.question}>What kind of lighting is present in the room?</Text>
      <View style={styles.buttonGroup}>
        <Button
          mode={formData.lighting === 'Natural Light' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, lighting: 'Natural Light' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="weather-sunny" size={20} />} // Add relevant icon
        >
          Natural Light
        </Button>
        <Button
          mode={formData.lighting === 'Artificial Light' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, lighting: 'Artificial Light' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="lightbulb" size={20} />} // Add relevant icon
        >
          Artificial Light
        </Button>
      </View>
  
      {formData.lighting === 'Natural Light' && (
        <View style={styles.buttonGroup}>
          <Button
            mode={formData.lightingDetail === 'South-Facing Windows' ? 'contained' : 'outlined'}
            onPress={() => setFormData({ ...formData, lightingDetail: 'South-Facing Windows' })}
            style={styles.optionButton}
            labelStyle={styles.buttonText}
            icon={() => <Icon name="window-open" size={20} />} // Add relevant icon
          >
            South-Facing Windows
          </Button>
          <Button
            mode={formData.lightingDetail === 'East-Facing Windows' ? 'contained' : 'outlined'}
            onPress={() => setFormData({ ...formData, lightingDetail: 'East-Facing Windows' })}
            style={styles.optionButton}
            labelStyle={styles.buttonText}
            icon={() => <Icon name="window-open" size={20} />} // Add relevant icon
          >
            East-Facing Windows
          </Button>
          <Button
            mode={formData.lightingDetail === 'West-Facing Windows' ? 'contained' : 'outlined'}
            onPress={() => setFormData({ ...formData, lightingDetail: 'West-Facing Windows' })}
            style={styles.optionButton}
            labelStyle={styles.buttonText}
            icon={() => <Icon name="window-open" size={20} />} // Add relevant icon
          >
            West-Facing Windows
          </Button>
          <Button
            mode={formData.lightingDetail === 'North-Facing Windows' ? 'contained' : 'outlined'}
            onPress={() => setFormData({ ...formData, lightingDetail: 'North-Facing Windows' })}
            style={styles.optionButton}
            labelStyle={styles.buttonText}
            icon={() => <Icon name="window-open" size={20} />} // Add relevant icon
          >
            North-Facing Windows
          </Button>
        </View>
      )}
  
      {formData.lighting === 'Artificial Light' && (
        <View style={styles.buttonGroup}>
          <Button
            mode={formData.lightingDetail === 'Standard Bulbs (Incandescent)' ? 'contained' : 'outlined'}
            onPress={() => setFormData({ ...formData, lightingDetail: 'Standard Bulbs (Incandescent)' })}
            style={styles.optionButton}
            labelStyle={styles.buttonText}
            icon={() => <Icon name="lightbulb-outline" size={20} />} // Add relevant icon
          >
            Standard Bulbs (Incandescent)
          </Button>
          <Button
            mode={formData.lightingDetail === 'LED Lights' ? 'contained' : 'outlined'}
            onPress={() => setFormData({ ...formData, lightingDetail: 'LED Lights' })}
            style={styles.optionButton}
            labelStyle={styles.buttonText}
            icon={() => <Icon name="led-outline" size={20} />} // Add relevant icon
          >
            LED Lights
          </Button>
          <Button
            mode={formData.lightingDetail === 'CFL Lights' ? 'contained' : 'outlined'}
            onPress={() => setFormData({ ...formData, lightingDetail: 'CFL Lights' })}
            style={styles.optionButton}
            labelStyle={styles.buttonText}
            icon={() => <Icon name="lightbulb-cfl" size={20} />} // Add relevant icon
          >
            CFL Lights
          </Button>
        </View>
      )}
  
      <Text style={styles.question}>What is the humidity level in your room?</Text>
      <View style={styles.buttonGroup}>
        <Button
          mode={formData.humidity === 'low' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, humidity: 'low' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="water-off" size={20} />} // Add relevant icon
        >
          Low (&lt;20%)
        </Button>
        <Button
          mode={formData.humidity === 'medium' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, humidity: 'medium' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="water" size={20} />} // Add relevant icon
        >
          Normal (20%-60%)
        </Button>
        <Button
          mode={formData.humidity === 'high' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, humidity: 'high' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="water-plus" size={20} />} // Add relevant icon
        >
          High (&gt;60%)
        </Button>
      </View>
  
      <Text style={styles.question}>What should be the size of the plant you want in your room?</Text>
      <View style={styles.buttonGroup}>
        <Button
          mode={formData.size === 'small' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, size: 'small' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="leaf" size={20} />} // Add relevant icon
        >
          Small [Up to 1 foot tall and wide]
        </Button>
        <Button
          mode={formData.size === 'medium' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, size: 'medium' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="leaf" size={20} />} // Add relevant icon
        >
          Medium [1-3 feet tall and wide]
        </Button>
        <Button
          mode={formData.size === 'large' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, size: 'large' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="leaf" size={20} />} // Add relevant icon
        >
          Large [3-6 feet tall and wide]
        </Button>
      </View>
  
      <Text style={styles.question}>What is the size of the area where the plant will be placed?</Text>
      <View style={styles.buttonGroup}>
        <Button
          mode={formData.space === 'small' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, space: 'small' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="border-all" size={20} />} // Add relevant icon
        >
          Small [1-4 square feet]
        </Button>
        <Button
          mode={formData.space === 'medium' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, space: 'medium' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="border-all" size={20} />} // Add relevant icon
        >
          Medium [4-16 square feet]
        </Button>
        <Button
          mode={formData.space === 'large' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, space: 'large' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="border-all" size={20} />} // Add relevant icon
        >
          Large [16-36 square feet]
        </Button>
      </View>
  
      <Text style={styles.question}>How often do you want to water your plant?</Text>
      <View style={styles.buttonGroup}>
        <Button
          mode={formData.wateringNeeds === 'daily' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, wateringNeeds: 'daily' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="calendar-today" size={20} />} // Add relevant icon
        >
          Daily
        </Button>
        <Button
          mode={formData.wateringNeeds === 'every 2-3 days' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, wateringNeeds: 'every 2-3 days' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="calendar" size={20} />} // Add relevant icon
          dark={formData.wateringNeeds === 'every 2-3 days'} 
        >
          Every 2-3 Days
        </Button>
        <Button
          mode={formData.wateringNeeds === 'weekly' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, wateringNeeds: 'weekly' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="calendar-week" size={20} />} // Add relevant icon
        >
          Weekly Watering
        </Button>
        <Button
          mode={formData.wateringNeeds === 'bi-weekly' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, wateringNeeds: 'bi-weekly' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="calendar-multiple" size={20} />} // Add relevant icon
        >
          Bi-Weekly Watering
        </Button>
        <Button
          mode={formData.wateringNeeds === 'monthly' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, wateringNeeds: 'monthly' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="calendar-month" size={20} />} // Add relevant icon
        >
          Monthly Watering
        </Button>
      </View>
  
      <Text style={styles.question}>What is the purpose of the plant?</Text>
      <View style={styles.buttonGroup}>
        <Button
          mode={formData.purpose === 'decorative' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, purpose: 'decorative' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="flower" size={20} />} // Add relevant icon
        >
          Decorative
        </Button>
        <Button
          mode={formData.purpose === 'air purifying' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, purpose: 'air purifying' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="air-filter" size={20} />} // Add relevant icon
        >
          Air Purifying
        </Button>
        <Button
          mode={formData.purpose === 'edible' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, purpose: 'edible' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="food-apple" size={20} />} // Add relevant icon
        >
          Edible
        </Button>
      </View>
  
      <Text style={styles.question}>What kind of aesthetics do you prefer?</Text>
      <View style={styles.buttonGroup}>
        <Button
          mode={formData.aesthetics === 'minimalist' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, aesthetics: 'minimalist' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="format-align-left" size={20} />} // Add relevant icon
        >
          Minimalist
        </Button>
        <Button
          mode={formData.aesthetics === 'lush' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, aesthetics: 'lush' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="forest" size={20} />} // Add relevant icon
        >
          Lush
        </Button>
        <Button
          mode={formData.aesthetics === 'colorful' ? 'contained' : 'outlined'}
          onPress={() => setFormData({ ...formData, aesthetics: 'colorful' })}
          style={styles.optionButton}
          labelStyle={styles.buttonText}
          icon={() => <Icon name="palette" size={20} />} // Add relevant icon
        >
          Colorful
        </Button>
      </View>
    </View>
  );

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
  
  export default MyComponent;
