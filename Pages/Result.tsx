import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const Result = ({ route, navigation }) => {
  const { resultText } = route.params ?? { resultText: 'No recommendation available.' };

  const parseResultText = (text) => {
    const sections = text.split('##').filter(section => section.trim() !== '');
    return sections.map(section => {
      const [title, ...content] = section.split('\n').filter(line => line.trim() !== '');
      return { title: title.trim(), content: content.join('\n').trim() };
    });
  };

  const removeAsterisks = (text) => {
    return text.replace(/\*/g, '');
  };

  const removeRecommendation = (text) => {
    return text.replace(/^Recommendation:\s*/, '');
  };

  const renderContent = (content) => {
    const lines = removeAsterisks(content).split('\n');
    return lines.map((line, index) => {
      const colonIndex = line.indexOf(':');
      if (colonIndex !== -1) {
        const boldPart = line.slice(0, colonIndex + 1);
        const restPart = line.slice(colonIndex + 1);
        return (
          <Text key={index} style={styles.sectionContent}>
            <Text style={styles.boldText}>{boldPart}</Text>
            {restPart}
          </Text>
        );
      }
      return <Text key={index} style={styles.sectionContent}>{line}</Text>;
    });
  };

  const renderSection = (title, content) => (
    <View key={title} style={styles.section}>
      <Text style={styles.sectionTitle}>{removeAsterisks(title)}</Text>
      {renderContent(content)}
    </View>
  );

  const parsedSections = parseResultText(resultText);

  const generatePDF = async () => {
    const htmlContent = `
      <html>
        <body>
          <h1>Your Plant Pal</h1>
          ${parsedSections.map((section, index) => `
            <h2>${removeAsterisks(removeRecommendation(section.title))}</h2>
            <p>${removeAsterisks(section.content)}</p>
            ${index < parsedSections.length - 1 ? '<hr>' : ''}
          `).join('')}
        </body>
      </html>
    `;

    try {
      const options = {
        html: htmlContent,
        fileName: 'plant_pal_result',
        directory: 'Documents',
      };

      const file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
      // Here you would typically open the PDF or show a success message
      alert('PDF saved successfully!');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  return (
    <ImageBackground source={require('./assets/bg11.png')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Your Plant Pal</Text>
            <TouchableOpacity onPress={generatePDF}>
              <Icon name="download" size={24} color="#5B4B8A" />
            </TouchableOpacity>
          </View>
          
          <Card style={styles.resultCard}>
            <Card.Content>
              {parsedSections.map((section, index) => (
                <React.Fragment key={index}>
                  {index === 0 ? (
                    <>
                      <Text style={styles.recommendationTitle}>{removeAsterisks(removeRecommendation(section.title))}</Text>
                      {renderContent(section.content)}
                    </>
                  ) : (
                    renderSection(section.title, section.content)
                  )}
                  {index < parsedSections.length - 1 && <Divider style={styles.divider} />}
                </React.Fragment>
              ))}
            </Card.Content>
          </Card>
          
          <Button 
            mode="contained" 
            onPress={() => navigation.navigate('Home')} 
            style={styles.button}
            icon={({ size, color }) => (
              <Icon name="home" size={size} color={color} />
            )}
          >
            Back to Home
          </Button>

          <Button 
            mode="contained" 
            onPress={generatePDF} 
            style={styles.button}
            icon={({ size, color }) => (
              <Icon name="file-pdf-box" size={size} color={color} />
            )}
          >
            Download PDF
          </Button>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5B4B8A',
    textAlign: 'center',
    marginRight: 10,
  },
  resultCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 16,
    marginBottom: 24,
    elevation: 4,
  },
  recommendationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  divider: {
    backgroundColor: '#fff',
    height: 1,
    marginVertical: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
    marginBottom: 8,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    marginTop: 12,
    backgroundColor: '#5B4B8A',
    paddingVertical: 8,
  },
});

export default Result;