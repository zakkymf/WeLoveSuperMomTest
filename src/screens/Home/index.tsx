import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Button from '../../components/Button';
import {homeStore} from './HomeStore';
import styles from './style';
const Home = () => {
  const [word, setWord] = useState('hello world');

  const onChangeText = (value: string) => {
    setWord(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          value={word}
          onChangeText={onChangeText}
          placeholder="Insert Word"
        />
        <Button
          label="Export to CSV"
          onPress={() => homeStore.onExportPress(word)}
        />

        <Text style={styles.title}>Result</Text>
        <Text style={styles.result}>{homeStore.toLowerCase(word)}</Text>
        <Text style={styles.result}>{homeStore.toUpperCase(word)}</Text>
        <Text style={styles.result}>{homeStore.parseString(word)}</Text>
      </View>
    </View>
  );
};

export default Home;
