import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 60,
    justifyContent: 'space-between',
  },
  logo: {
    width: 72,
    height: 32,
  },
  right: {
    width: 24,
    height: 24,
  },
  cover: {
    width: 311,
    height: 160,
    marginTop: 32,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  containerList: {
    width: '100%',

  },
  contentList: {
   paddingLeft: 32,
   paddingRight: 64,
   alignItems: 'flex-start',
  },
});