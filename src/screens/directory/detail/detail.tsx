import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { Member } from '../types';

type Props = {
    member: Member
}

export default function DetailScreen({ member }: Props) {

    const { koreanName, englishName = '', phoneNumber = '', email = '', photoUrl = '' } = member;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{koreanName}</Text>
      <Text>{englishName}</Text>
      <Text>{phoneNumber}</Text>
      <Text>{email}</Text>
      <Text>{photoUrl}</Text>
    </View>
  );
}