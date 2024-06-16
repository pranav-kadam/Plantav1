import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';


type RootStackParamList = {
  Home: undefined;
  Results: { recommendation: string };  // Updated screen name here
};

type ResultScreenRouteProp = RouteProp<RootStackParamList, 'Results'>;  // Updated screen name here

interface Props {
  route: ResultScreenRouteProp;
}

const Result: React.FC<Props> = ({ route }) => {
  const { recommendation } = route.params;

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <Text style={styles.recommendationText}>{recommendation}</Text>
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
    backgroundColor: '#FFFAF0', // Light cream background for a warm look
  },
  recommendationText: {
    fontSize: 20, // Slightly larger font size for better readability
    textAlign: 'center',
    color: '#2E8B57', // Sea green color for the text
    marginVertical: 16, // Vertical margin for spacing around the text
    paddingHorizontal: 20, // Horizontal padding for better text alignment
    lineHeight: 28, // Increased line height for better text spacing
    fontFamily: 'Helvetica', // Modern, clean font family
    backgroundColor: '#FFF8DC', // Light goldenrod background for the text
    padding: 10, // Padding around the text for better spacing
    borderRadius: 8, // Rounded corners for the text background
    shadowColor: '#000', // Shadow color for the text background
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 4, // Shadow radius
  },
});



export default Result;
