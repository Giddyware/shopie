import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  text-align: center;
  flex: 1;
`;

const Logo = styled.h1``;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-center: center;
  justify-content: flex-end;
  /* padding: 20px; */
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 24px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          {/* <SearchContainer>InputIcon<SearchContainer> */}
          <SearchContainer>
            <Input />
            Icon with inline styles
          </SearchContainer>
        </Left>

        <Center>
          <Logo>SHOPIE.🥧 </Logo>
        </Center>

        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>🧺 Icon with badge</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
