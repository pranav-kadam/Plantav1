// src/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    justifyContent: 'flex-start',
    padding: 16,
  },
  progressBar: {
    marginTop: 150,
    height: 10,
    borderRadius: 5,
    marginVertical: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#422800',
    backgroundColor: '#fbeee0',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  optionButton: {
    marginTop: 16,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'SpicyRice-Regular.ttf',
  },
  skipButton: {
    marginTop: 16,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6F61',
  },
});

export default styles;
