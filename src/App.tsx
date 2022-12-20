import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CommonStrings} from './common/strings';
import {themes} from './themes';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texts}>{CommonStrings.title}</Text>
      <Text style={styles.texts}>{CommonStrings.subtitle}</Text>
      <Text style={styles.texts}>Deploy with codemagic</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themes.main,
  },
  texts: {
    color: 'black',
    fontSize: 18,
  },
});

export default App;
