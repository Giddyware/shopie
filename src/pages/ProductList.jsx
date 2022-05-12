import styled from "styled-components/macro";
import Navbar from "../components/Navbar";
import SuperHeader from "../components/SuperHeader";

const Container = styled.div``;
const Title = styled.h1``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <SuperHeader />
      <Title>Cream Pie</Title>
      <FilterContainer>
        <Filter>filter</Filter>
        <Filter>filter2</Filter>
      </FilterContainer>
    </Container>
  );
};
export default ProductList;
