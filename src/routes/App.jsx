import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext from '@context/AppContext';
import Layout from '@container/Layout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import PasswordRecovery from '@pages/PasswordRecovery';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import NotFound from '@pages/NotFound';
import useInitialState from '@hooks/useInitialState';
import '@styles/global.scss';

const App = () => {
	const initialState = useInitialState();
	return (
		
		<AppContext.Provider value={initialState}>
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/login" element={<Login/>} />
					<Route path="/password-recovery" element={<PasswordRecovery/>} />
					<Route path="/send-email" element={<SendEmail/>} />
					<Route path="/new-password" element={<NewPassword/>} />
					<Route path="/account" element={<MyAccount/>} />
					<Route path="*" element={<NotFound/>} />
				</Routes>
			</Layout>
		</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
