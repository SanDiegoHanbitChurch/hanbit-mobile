import React from 'react';
import { render, fireEvent  } from '@testing-library/react-native';
import MemberRow from './memberRow';

describe('MemberRow', () => {
    test('should render member row', () => {
        const member = {
            id: '1',
            koreanName: 'Korean Name',
            phoneNumber: '8585551212'
        };
        const onPress = jest.fn();
    
      const { getByTestId } = render(
        <MemberRow member={member} onPress={onPress} />
      );
    
      const element = getByTestId(member.id);
      expect(element).toBeDefined();
    });

    test('should handle on press', () => {
      const member = {
          id: '1',
          koreanName: 'Korean Name',
          phoneNumber: '8585551212'
      };
      const onPress = jest.fn();
  
    const { getByTestId } = render(
      <MemberRow member={member} onPress={onPress} />
    );
  
    const element = getByTestId(member.id);
    fireEvent.press(element);
  
    expect(onPress).toHaveBeenCalled();
  });

})