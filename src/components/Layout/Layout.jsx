import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container, Header, Nav } from '../App.styled';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #1E90FF;
  font-weight: 500;

  &:hover {
    color: #bdbdbd;
  }

  &.active {
    color: #FFD700;
  }
`;

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </Nav>
        </Container>
      </Header>

      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
