import React, { useMemo, useCallback } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity, Share, Platform } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

const Result = ({ route, navigation }) => {
  const { resultText = 'No recommendation available.' } = route.params ?? {};

  const parsedSections = useMemo(() => {
    return resultText.split('##')
      .filter(section => section.trim())
      .map(section => {
        const [title, ...content] = section.split('\n').filter(line => line.trim());
        return { title: title.trim(), content: content.join('\n').trim() };
      });
  }, [resultText]);

  const removeAsterisks = useCallback((text) => text.replace(/\*/g, ''), []);
  const removeRecommendation = useCallback((text) => text.replace(/^Recommendation:\s*/, ''), []);

  const renderContent = useCallback((content) => {
    return removeAsterisks(content).split('\n').map((line, index) => {
      const colonIndex = line.indexOf(':');
      if (colonIndex !== -1) {
        const [boldPart, restPart] = [line.slice(0, colonIndex + 1), line.slice(colonIndex + 1)];
        return (
          <Text key={index} style={styles.sectionContent} selectable>
            <Text style={styles.boldText}>{boldPart}</Text>
            {restPart}
          </Text>
        );
      }
      return <Text key={index} style={styles.sectionContent}>{line}</Text>;
    });
  }, [removeAsterisks]);

  const renderSection = useCallback(({ title, content }) => (
    <View key={title} style={styles.section}>
      <Text style={styles.sectionTitle}>{removeAsterisks(title)}</Text>
      {renderContent(content)}
    </View>
  ), [removeAsterisks, renderContent]);

  const shareResult = useCallback(async () => {
    try {
      const shareContent = parsedSections.map(section => 
        `${removeAsterisks(removeRecommendation(section.title))}\n\n${removeAsterisks(section.content)}`
      ).join('\n\n---\n\n');

      await Share.share({
        message: `Your Plant Pal Recommendation:\n\n${shareContent}`,
        title: 'Your Plant Pal Recommendation'
      });
    } catch (error) {
      console.error('Error sharing result:', error);
      alert('Failed to share result. Please try again.');
    }
  }, [parsedSections, removeAsterisks, removeRecommendation]);

  const generatePDF = useCallback(async () => {
    const htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; color: #000; }
            h1, h2 { margin-top: 20px; }
            p { margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <h1>Your PlantPal Growth Schedule</h1>
          ${parsedSections.map(section => `
            <h2>${removeAsterisks(removeRecommendation(section.title))}</h2>
            <p>${removeAsterisks(section.content).replace(/\n/g, '<br>')}</p>
          `).join('')}
        </body>
      </html>
    `;

    try {
      const { uri } = await Print.printToFileAsync({ html: htmlContent });
      if (Platform.OS === "ios") {
        await Sharing.shareAsync(uri);
      } else if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri);
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  }, [parsedSections, removeAsterisks, removeRecommendation]);

  return (
    <ImageBackground source={require('./assets/bg11.png')} style={styles.background}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.safeArea}>
          <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Your Plant Pal</Text>
              <TouchableOpacity onPress={shareResult}>
                <Icon name="share-variant" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            
            <Card style={styles.resultCard}>
              <Card.Content>
                {parsedSections.map((section, index) => (
                  <React.Fragment key={index}>
                    {index === 0 ? (
                      <>
                        <Text style={styles.recommendationTitle}>
                          {removeAsterisks(removeRecommendation(section.title))}
                        </Text>
                        {renderContent(section.content)}
                      </>
                    ) : (
                      renderSection(section)
                    )}
                    {index < parsedSections.length - 1 && <View style={styles.divider} />}
                  </React.Fragment>
                ))}
              </Card.Content>
            </Card>
            
            {['Home', 'share-variant', 'file-pdf-box'].map((iconName, index) => (
              <Button 
                key={iconName}
                mode="contained" 
                onPress={index === 0 ? () => navigation.navigate('Home') : index === 1 ? shareResult : generatePDF}
                style={styles.button}
                icon={({ size, color }) => (
                  <Icon name={iconName} size={size} color={color} />
                )}
              >
                {index === 0 ? 'Back to Home' : index === 1 ? 'Share Result' : 'Download as PDF'}
              </Button>
            ))}
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginRight: 10,
    fontFamily: 'jak',
  },
  resultCard: {
    backgroundColor: 'rgba(240, 230, 210, 0.9)',
    borderRadius: 16,
    marginBottom: 24,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#000',
    opacity: 0.8
  },
  recommendationTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
    fontFamily: 'monospace',
  },
  divider: {
    height: 2,
    backgroundColor: '#000',
    marginVertical: 16,
    opacity: 0.5,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
    fontFamily: 'monospace',
  },
  sectionContent: {
    fontSize: 18,
    color: '#000',
    lineHeight: 28,
    marginBottom: 8,
    fontFamily: 'monospace',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
  button: {
    marginTop: 12,
    backgroundColor: '#000',
    paddingVertical: 8,
    borderRadius: 8,
  },
});

export default Result;