import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components/macro";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: baseline;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-item: baseline;
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
  margin-top: -10px;
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
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray" }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>SHOPIE.🥧 </Logo>
        </Center>

        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge
              badgeContent={4}
              color="secondary"
              style={{ marginTop: "-5px" }}
            >
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
