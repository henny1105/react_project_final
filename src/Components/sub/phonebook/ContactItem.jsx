import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactItem = () => {
	return (
		<Row>
			<Col lg={1}>
				<img src='https://blog.kakaocdn.net/dn/bj4oa7/btqLJWFLMgd/wu4GV8PKbXdICuyW0me0zk/img.jpg' width={50} alt='프로필 사진' />
			</Col>
			<Col lg={11}>
				<div>김혜인</div>
				<div>01012341004</div>
			</Col>
		</Row>
	);
};

export default ContactItem;
