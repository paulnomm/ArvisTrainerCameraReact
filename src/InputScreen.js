import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const InputScreen = ({ navigation }) => {
  const [ip, setIp] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Ingresa la url"
        value={ip}
        onChangeText={setIp}
      />
      <Button
        title="Start Processing"
        onPress={() => navigation.navigate('Process', { ip })}
      />
    </View>
  );
};

export default InputScreen;