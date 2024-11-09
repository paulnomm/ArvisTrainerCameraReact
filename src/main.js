/* eslint-disable react/react-in-jsx-scope */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InputScreen from './InputScreen';
import ProcessScreen from './ProcessScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Input" component={InputScreen} />
        <Stack.Screen name="Process" component={ProcessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;