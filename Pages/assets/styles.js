import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add translucent overlay
  },
  glassContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    overflow: 'hidden',
    padding: 20,
  },

  glassButton: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },

  buttonContent: {
    height: 50,
  },

  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },

  selectedButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  progressBar: {
    marginBottom: 40,
    height: 6,
    backgroundColor: 'rgba(244, 234, 213, 0.3)',
  },
  question: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#F4EAD5',
    textAlign: 'center',
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  buttonGroup: {
    marginBottom: 40,
  },
  optionButton: {
    marginBottom: 20,
    borderRadius: 25, 
    borderWidth: 2,
    borderColor: '#F4EAD5', 
    backgroundColor: 'rgba(244, 234, 213, 0.7)', // Semi-transparent background
    backdropFilter: 'blur(10px)', // Add blur effect (note: not supported on all React Native platforms)
  },
  selectedButton: {
    backgroundColor: '#F4EAD5',  
  },
  buttonContent: {
    height: 60,
    flexDirection: 'row-reverse',
  },
  buttonText: {
    color: '#000000', // Ensure good contrast
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginLeft: 10,
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: { width: 1, height: 1 },  
    textShadowRadius: 3,  
  },
  selectedButtonText: {
    color: '#000000',  
  },
  skipButton: {
    borderRadius: 25,  
    borderWidth: 2,
    borderColor: '#CCC5B9',
    backgroundColor: 'transparent',
  },
  skipButtonText: {
    color: '#CCC5B9',
    fontSize: 16,
    letterSpacing: 1,
  },
});

export default styles;