import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding-bottom: 32px;
	margin: 32px;
`;

const NavbarLink = styled(Link)``;

export const Navbar = () => (
	<NavbarWrapper>
		<NavbarLink to="/">Alex's Site</NavbarLink>
		<NavbarLink to="/cart">Cart</NavbarLink>
	</NavbarWrapper>
);

export default Navbar;
