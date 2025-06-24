import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  profileSection: {
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 12,
  },
  avatar: {
    width: 100,
    height: 100, 
    borderRadius: 50,
    alignSelf: 'center',
  },
  editAvatarIcon: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    backgroundColor: '#EEE',
    borderRadius: 50,
    padding: 4,
  },
  profileName: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    textAlign: "center"
  },

  saveButton: {
    backgroundColor: '#2454E0',
    paddingVertical: 18, 
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal: 30,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  inputLabel: {
    fontSize: 13,
    color: '#555',
    marginBottom: 2,
    left: 10
  },
  formContainer: {
    paddingHorizontal: "6%",
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 12,
  },
});