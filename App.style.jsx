import styled from 'styled-components/native';

export const StyledViewContainer = styled.View.attrs((props) => {  // My Goodness, this is so cool!
  return {
    paddingHorizontal: 20,
  }}
)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledViewHeader = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 50px;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity``;

// export const StyledTouchableWithoutFeedback = styled.... 없음. 그러나 직접 만들 수 있음.

export const StyledTextScreenNav = styled.Text`
  color: ${(props) => {
    return props.navName === 'Work' ? (
      props.working ? props.theme.colors.text : props.theme.colors.gray
    ) : (
      props.working ? props.theme.colors.gray : props.theme.colors.text
    )
  }};
  font-size: 24px;
  font-weight: 600;
`;
