import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactForm = () => {
	return (
		<Form>
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				<Form.Label>이름</Form.Label>
				<Form.Control type='text' placeholder='이름을 입력해주세요.' />
			</Form.Group>
			<Form.Group className='mb-3' controlId='formContact'>
				<Form.Label>전화번호</Form.Label>
				<Form.Control type='number' placeholder='전화번호을 입력해주세요.' />
			</Form.Group>
			<Button variant='primary' type='submit'>
				추가
			</Button>
		</Form>
	);
};

export default ContactForm;
