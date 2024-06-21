import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Provider as PaperProvider, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Results: { formData: FormData; resultText: string } | undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Header: React.FC = () => (
  <View style={styles.headerContainer}>
    <Title style={styles.headerTitle}>PLANTA</Title>
  </View>
);

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleBegin = () => {
    navigation.navigate('Lighting' as keyof RootStackParamList);
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <Title style={styles.title}>Welcome to PLANTA!</Title>
            <Button mode="contained" onPress={handleBegin} style={styles.button}>
              Let's begin
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  scrollView: {
    marginHorizontal: 15,
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    width: '75%',
    marginTop: 16,
    backgroundColor: '#E0115F',
  },
});

export default Home;
