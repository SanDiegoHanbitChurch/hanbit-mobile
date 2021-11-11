import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListRow from './listRow';
import { Member } from '../types';

type Props = {
    members: Member[];
    viewMember: (member: Member) => void;
};

export default function ListScreen({ members, viewMember}: Props) {

    const renderListRow = ({ item: member }: { item: Member}) => (
        <ListRow member={member} onPress={viewMember} />
    )


  return (
    <SafeAreaView>
        <FlatList 
            data={members}
            renderItem={renderListRow}
            keyExtractor={member => member.id}
        />
    </SafeAreaView>
  );
}