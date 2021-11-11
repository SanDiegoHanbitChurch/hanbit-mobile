import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { ScreensParamsList } from '../../RootStackParamsList';
import ListScreen from './list';

type ListScreenNavigationProps = StackNavigationProp<ScreensParamsList, 'List'>;


export default function ListScreenContainer() {
    const navigation = useNavigation<ListScreenNavigationProps>();

    const members = [
      {
        id: '1',
        koreanName: 'Korean Name1',
        phoneNumber: '8585551212'
      },
      {
        id: '2',
        koreanName: 'Korean Name2',
        phoneNumber: '8585551212'
      },
      {
        id: '3',
        koreanName: 'Korean Name3',
        phoneNumber: '8585551212'
      },
      {
        id: '4',
        koreanName: 'Korean Name4',
        phoneNumber: '8585551212'
      },
      {
        id: '5',
        koreanName: 'Korean Name5',
        phoneNumber: '8585551212'
      },
    ]

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ListScreen 
        members={members} 
        viewMember={(member) => navigation.navigate('Detail', { member })}/>
    </View>
  );
}