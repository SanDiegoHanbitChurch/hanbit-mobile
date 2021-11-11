import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Member } from '../types';

type Props = {
    member: Member,
    onPress: (member: Member) => void;
}

const MemberRow = ({ member, onPress }: Props) => {
    const { id, koreanName, phoneNumber } = member;

    return (
        <View>
            <Pressable onPress={() => onPress(member)}>
                <Text testID={id}>{`${koreanName} (${phoneNumber})`}</Text>
            </Pressable>
        </View>
    )
};

export default MemberRow;