import styled from 'styled-components';

export const Layout = styled.div`
	height: 100vh;
	display: flex;
`;

export const SideBar = styled.div`
	width: 25rem;
	height: 100%;
	background-color: #1f0038;
`;

export const Container = styled.div`
	display: flex;
	height: 100%;
	width: calc(100% - 25rem);
`;
