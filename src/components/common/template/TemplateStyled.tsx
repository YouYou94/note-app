import styled from 'styled-components';

export const Layout = styled.div<{ mode: boolean }>`
  flex: 1;

  display: flex;
  flex-direction: row;

  color: ${(prop) => (prop.mode ? 'black' : 'white')};
  background-color: ${(prop) =>
    prop.mode ? 'rgb(250, 250, 250);' : 'rgb(45, 45, 45);'};
`;

export const NoteLayout = styled.div<{ responsive?: boolean }>`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 2rem 1rem;

  ${(prop) =>
    prop.responsive
      ? '@media screen and (max-width: 1024px) { display: none; }'
      : ''};
`;
