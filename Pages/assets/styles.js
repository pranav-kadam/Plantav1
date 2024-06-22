// src/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    justifyContent: 'flex-start',
    padding: 16,
  },
  progressBar: {
    marginTop: 80,
    height: 8,
    borderRadius: 0,
    marginVertical: 20,
    backgroundColor: 'rgba(244, 234, 213, 0.3)',
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#F4EAD5',
    backgroundColor: 'rgba(64, 61, 57, 0.8)',
    padding: 16,
    borderRadius: 0,
    textAlign: 'center',
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  buttonGroup: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  optionButton: {
    marginTop: 16,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: '#F4EAD5',
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#F4EAD5',
    fontSize: 16,
    fontWeight: 'normal',
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  skipButton: {
    marginTop: 24,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: '#CCC5B9',
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Add these to your existing styles in styles.js

background: {
  flex: 1,
  resizeMode: 'cover',
},
safeArea: {
  flex: 1,
},
container: {
  flex: 1,
  padding: 16,
  justifyContent: 'center',
},
progressBar: {
  marginBottom: 40,
  height: 8,
  backgroundColor: 'rgba(244, 234, 213, 0.3)',
},
question: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 30,
  color: '#F4EAD5',
  textAlign: 'center',
  fontFamily: 'monospace',
  letterSpacing: 1,
},
buttonGroup: {
  marginBottom: 30,
},
optionButton: {
  marginBottom: 16,
  borderRadius: 0,
  borderWidth: 2,
  borderColor: '#F4EAD5',
  backgroundColor: 'transparent',
},
buttonContent: {
  height: 50,
  flexDirection: 'row-reverse',
},
buttonText: {
  color: '#F4EAD5',
  fontSize: 16,
  fontFamily: 'monospace',
  letterSpacing: 1,
},
skipButton: {
  borderRadius: 0,
  borderWidth: 2,
  borderColor: '#CCC5B9',
  backgroundColor: 'transparent',
},
skipButtonText: {
  color: '#CCC5B9',
  fontSize: 14,
  fontFamily: 'monospace',
  letterSpacing: 1,
},
});

export default styles;