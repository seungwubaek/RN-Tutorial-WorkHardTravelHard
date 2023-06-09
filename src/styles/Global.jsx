import styled, { css } from 'styled-components/native';

export const CSSGlobalText = css`
  color: ${({ theme }) => theme.colors.text};
`

export const StyledTextGlobal = styled.Text`
  ${CSSGlobalText}
`;
