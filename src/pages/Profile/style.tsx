import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '8%',
    marginBottom: 10,
    padding: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    alignItems: 'center',
    margin: 'auto',
  },
  editText: {
    fontSize: 18,
    color: 'black',
    right: 5,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 100,
    marginTop: 30,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 50,
    alignSelf: 'center',
  },
  avatarContainer: {
    width: '100%'
  },
  editAvatarIcon: {
    position: 'absolute',
    bottom: 24,
    right: 150,
    backgroundColor: '#EEE',
    borderRadius: 50,
    padding: 4,
  },
  profileName: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: '600',
    width: '60%',
    textAlign: 'center',
  },
  form: {
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 25,
    fontSize: 20,
  },
  saveButton: {
    backgroundColor: '#2454E0',
    paddingVertical: 20,
    borderRadius: 30,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
  },  
});
