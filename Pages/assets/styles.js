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
    justifyContent: 'center'
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
    fontFamily: 'sans-serif',
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
    borderRadius: 10,  // Added some roundness
    borderWidth: 2,
    borderColor: '#000000',  // Changed to black
    backgroundColor: '#000000',  // Changed to black
  },
  selectedButton: {
    backgroundColor: '#FFFFFF',  // Changed to white for selected state
  },
  buttonContent: {
    height: 60,
    flexDirection: 'row-reverse',
  },
  buttonText: {
    color: '#FFFFFF',  // Changed to white
    fontSize: 18,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    letterSpacing: 1,
    marginLeft: 10,
    textShadowColor: 'rgba(1, 1, 1, 0.9)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  selectedButtonText: {
    color: '#000000',  // Added for selected state (black text)
  },
  skipButton: {
    borderRadius: 0,
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