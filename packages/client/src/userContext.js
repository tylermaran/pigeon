import { useState, createContext, useContext } from 'react';

const UserContext = createContext();

/**
 * Temporary database / state solution:
 * Everything exists under the user context.
 * - On app load, attempt to hydrate user from localStorage.
 * - On setUser, update local storage with the current user.
 */
const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState({
		sources: [],
		providers: [],
		campaigns: [],
	});
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

const useUserContext = () => useContext(UserContext);

export { UserContextProvider, useUserContext };
