import React, { useEffect } from 'react';
import { View } from 'react-native';
import { RNFFmpeg } from 'react-native-ffmpeg';

const ProcessScreen = ({ route }) => {
  const { ip } = route.params;

  useEffect(() => {
    const streamUrl = `${ip}`;
    RNFFmpeg.execute(`-i ${streamUrl} -r 1 -f image2 output%03d.jpg`)
      .then(() => console.log('Processing complete'))
      .catch(err => console.error('Error processing video', err));
  }, [ip]);

  return <View />;
};

export default ProcessScreen;