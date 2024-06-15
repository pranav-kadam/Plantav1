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
    backgroundColor: '#f5f5f5', // Light grey background for a clean look
  },
  recommendationText: {
    fontSize: 20, // Slightly larger font size for better readability
    textAlign: 'left',
    color: '#333', // Dark grey text color for better contrast
    marginVertical: 16, // Vertical margin for spacing around the text
    paddingHorizontal: 20, // Horizontal padding for better text alignment
    lineHeight: 28, // Increased line height for better text spacing
    fontFamily: 'Helvetica', // Modern, clean font family
  },
});


export default Result;
