import { useState, createContext, useContext, useEffect } from 'react';
import { getItem, setItem } from './utils/localStorage';

const UserContext = createContext();

/**
 * Temporary database / state solution:
 * Everything exists under the user context.
 * - On app load, attempt to hydrate user from localStorage.
 * - On setUser, update local storage with the current user.
 */
const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	// Initialize user from local storage
	useEffect(() => {
		const localUser = getItem('user');
		if (localUser) {
			setUser(localUser);
		} else {
			setUser({
				sources: [],
				providers: [],
				campaigns: [
					{
						provider: null,
						query: '',
						source: null,
						template: '',
						templateValues: [],
					},
				],
			});
		}
	}, []);

	// Update local data on user change
	useEffect(() => {
		if (user !== null) {
			setItem('user', JSON.stringify(user));
		}
	}, [user]);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{user ? children : null}
		</UserContext.Provider>
	);
};

const useUserContext = () => useContext(UserContext);

export { UserContextProvider, useUserContext };
