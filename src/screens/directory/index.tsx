import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreensParamsList } from '../RootStackParamsList';
import ListScreen from './list';
import DetailScreen from './detail';

const Stack = createNativeStackNavigator<ScreensParamsList>();

export default function DirectoryScreens() {
  return (
        <Stack.Navigator>
            <Stack.Screen name="List" component={ListScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
  );
}