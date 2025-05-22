import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 50,
    alignSelf: 'center',
  },
  avatarContainer: {
  },
  editAvatarIcon: {
    position: 'absolute',
    bottom: 24,
    right: 10,
    backgroundColor: '#EEE',
    borderRadius: 50,
    padding: 4,
  },
  profileName: {
    marginTop: 10,
    marginBottom: 50,
    fontSize: 30,
    fontWeight: '600',
    width: 'auto',
    height: 'auto',
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#2454E0',
    paddingVertical: 20,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: '60%',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
