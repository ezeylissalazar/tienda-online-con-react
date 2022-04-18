import React from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg'

const Login = () => {
	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logo" />
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="correo@example.com" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button className="primary-button login-button" href="/">Login
					</button>
					<a href="/password-recovery">Forgot my password</a>
				</form>
			</div>
		</div>
	);
}

export default Login;