import styled, { css } from 'styled-components/native';

import { StyledTextGlobal } from '~/styles/Global';
import { toDoCreation, toDoItem } from '~/styles/variables';

// Common

export const StyledTouchableOpacityToDoIconCommon = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

// AppBody

export const StyledViewTextInputWrapper = styled.View``;

export const StyledTextInput = styled.TextInput.attrs((props) => {
  return {
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginVertical: 20,
  }
})`
  background-color: ${({ theme }) => theme.colors.textInputBackground};
  border-radius: 30px;
  font-size: ${toDoCreation.fontSize}px;
`;

export const StyledScrollView = styled.ScrollView``;

// ToDoItem

export const StyledViewToDoItem = styled.View.attrs((props) => {
  return {
    paddingVertical: props.editing ? 5 : 10,
    paddingHorizontal: 15,
    paddingLeft: 10,
  }
})`
  min-height: ${toDoItem.minHeight}px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.deepGray};
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

// EditToDo

export const StyledViewEditToDoWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${toDoItem.iconGap}px;
  margin-right: ${toDoItem.iconGap}px;
`;

export const StyledTextInputEditToDo = styled.TextInput.attrs((props) => {
  return {
    paddingHorizontal: 10,
  }
})`
  flex: 1;
  font-size: ${toDoItem.fontSize}px;
  background-color: ${({ theme }) => theme.colors.textInputBackground};
  border-radius: 12px;
`;

export const StyledTouchableOpacityEditToDoCancelIcon = styled(StyledTouchableOpacityToDoIconCommon)``;

// ToDo Finish Icon

export const StyledTouchableOpacityToDoFinishIcon = styled(StyledTouchableOpacityToDoIconCommon)``;

export const StyledTextToDoFinishIcon = styled(StyledTextGlobal)`
  font-size: ${toDoItem.fontSize}px;
  font-weight: 500;
  ${({ finished }) => finished && css`
    color: ${({ theme }) => theme.colors.gray};
    text-decoration: ${({ finished }) => finished ? 'line-through' : 'none'};
  `}
`;


// ToDo Button Group

export const StyledViewToDoBtnGroup = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: ${toDoItem.iconGap}px;
`;

export const StyledTouchableOpacityToDoBtnIcon = styled(StyledTouchableOpacityToDoIconCommon)``;
