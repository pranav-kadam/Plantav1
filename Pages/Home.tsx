import React, { useCallback } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, ImageBackground } from 'react-native';
import { Button, Provider as PaperProvider, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Lighting: undefined;
  Results: { formData: FormData; resultText: string } | undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Header: React.FC = React.memo(() => (
  <View style={styles.headerContainer}>
    <Title style={styles.headerTitle}>PLANTPAL</Title>
  </View>
));

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleBegin = useCallback(() => {
    navigation.navigate('Lighting');
  }, [navigation]);

  return (
    <PaperProvider>
      <ImageBackground source={require('./assets/bg8.png')} style={styles.background}>
        <SafeAreaView style={styles.safeArea}>
          <Header />
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.content}>
              <Title style={styles.title}>PLANTPAL</Title>
              <Button 
                mode="contained" 
                onPress={handleBegin} 
                style={styles.button} 
                labelStyle={styles.buttonLabel}
                accessibilityLabel="Start growing together"
              >
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
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#F4EAD5',
    fontFamily: 'jak',
    letterSpacing: 6,
    lineHeight: 50
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

export default React.memo(Home);