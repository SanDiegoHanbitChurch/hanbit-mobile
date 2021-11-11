import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreensParamsList } from './RootStackParamsList';
import DirectoryScreens from './directory';

const Stack = createNativeStackNavigator<ScreensParamsList>();

export default function Screens() {
  return (
        <Stack.Navigator>
            <Stack.Screen name="Directory" component={DirectoryScreens} />
        </Stack.Navigator>
  );
}