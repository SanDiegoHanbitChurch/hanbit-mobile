import * as React from 'react';
import { useRoute } from '@react-navigation/native';
import { ScreenRouteProps } from '../../RootStackParamsList';
import DetailScreen from './detail';

export default function DetailScreenContainer() {
    const { params } = useRoute<ScreenRouteProps<'Detail'>>();

  return (
    <DetailScreen member={params.member} />
  );
}