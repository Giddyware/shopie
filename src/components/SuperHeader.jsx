import styled from "styled-components/macro";

const Container = styled.div`
  height: 30px;
  background-color: tomato;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`;

const SuperHeader = () => {
  return <Container>Super Deal! FREE Delivery on Orders Over $50!</Container>;
};
export default SuperHeader;
