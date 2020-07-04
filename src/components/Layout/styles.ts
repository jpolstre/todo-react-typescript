import styled from 'styled-components'

// HE - Header
// LT - List Tasks
// FO - Footer

const Grid = styled.div`
  display: grid;
  
  grid-template-columns:240px auto 240px;
  grid-template-rows:55px  auto 75px;
  
  grid-template-areas:
  'HE HE HE'
  'LT LT LT'
  'FO FO FO';

  height: 100vh;

  @media (max-width: 320px){
    grid-template-areas:
    'HE'
    'LT'
    'FO';

    zoom: 10 !important;
    user-zoom: 10;
  }
`;

export default Grid