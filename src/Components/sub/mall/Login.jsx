import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
	const navigate = useNavigate();
	const loginUser = (event) => {
		event.preventDefault();
		setAuthenticate(true);
		navigate('/mall_project');
	};

	return (
		<Form onSubmit={(event) => loginUser(event)} className='login_from'>
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				<Form.Label>Email address</Form.Label>
				<Form.Control type='email' placeholder='Enter email' />
				<Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
			</Form.Group>

			<Form.Group className='mb-3' controlId='formBasicPassword'>
				<Form.Label>Password</Form.Label>
				<Form.Control type='password' placeholder='Password' />
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicCheckbox'>
				<Form.Check type='checkbox' label='Check me out' />
			</Form.Group>
			<Button variant='danger' type='submit'>
				Login
			</Button>
		</Form>
	);
};

export default Login;
