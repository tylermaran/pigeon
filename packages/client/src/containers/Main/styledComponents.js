import styled from 'styled-components';

export const Layout = styled.div`
	height: 100vh;
	display: flex;
`;

export const SideBar = styled.div`
	background-color: #1f0038;
	height: 100%;
	width: 18rem;
`;

export const Container = styled.div`
	display: flex;
	height: 100%;
	width: calc(100% - 18rem);
`;
