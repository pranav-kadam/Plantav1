import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, ImageBackground } from 'react-native';
import { Button, Provider as PaperProvider, Title, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Results: { formData: FormData; resultText: string } | undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Header: React.FC = () => (
  <View style={styles.headerContainer}>
    <Title style={styles.headerTitle}>PLANTPAL</Title>
  </View>
);

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleBegin = () => {
    navigation.navigate('Lighting' as keyof RootStackParamList);
  };

  return (
    <PaperProvider>
      <ImageBackground source={require('./assets/bk.gif')} style={styles.background}>
        <SafeAreaView style={styles.safeArea}>
          <Header />
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.content}>
              <Text style={styles.subtitle}>Welcome to</Text>
              <Title style={styles.title}>PLANTPAL</Title>
              <Text style={styles.description}>Your personal plant care assistant</Text>
              <Button mode="contained" onPress={handleBegin} style={styles.button} labelStyle={styles.buttonLabel}>
                Let's grow together
              </Button>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  safeArea: {
    flex: 1,
  },
  headerContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#F4EAD5',
    fontSize: 28,
    fontFamily: 'monospace',
    letterSpacing: 4,
    marginTop: 50
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  content: {
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#008080',
    marginBottom: 8,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#F4EAD5',
    fontFamily: 'monospace',
    letterSpacing: 6,
    lineHeight:50
  },
  description: {
    fontSize: 19,
    color: '#006080',
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  button: {
    width: '80%',
    marginTop: 24,
    backgroundColor: '#403D39',
    borderRadius: 0,
    borderWidth: 2,
    borderColor: '#F4EAD5',
  },
  buttonLabel: {
    color: '#F4EAD5',
    fontSize: 16,
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
});

export default Home;