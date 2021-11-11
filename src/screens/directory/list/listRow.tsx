import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Member } from '../types';

type Props = {
    member: Member,
    onPress: (member: Member) => void;
}

const ListRow = ({ member, onPress }: Props) => {
    const { koreanName, phoneNumber } = member;

    return (
        <View>
            <Pressable onPress={() => onPress(member)}>
                <Text>{`${koreanName} (${phoneNumber})`}</Text>
            </Pressable>
        </View>
    )
};

export default ListRow;