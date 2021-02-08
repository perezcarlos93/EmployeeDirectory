import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

function About() {
	return (
		<div>
			<Hero backgroundImage="https://images.idgesg.net/images/article/2018/04/thumbs-up_positive-attitude_congratulations_happy-employees-staff-100756193-large.jpg">
				<h1>EmployeeSearch</h1>
				<h2>Find your fellow employees fast</h2>
			</Hero>
			<Container style={{ marginTop: 30 }}>
				<Row>
					<Col size="md-12">
						<h1>Welcome To EmployeeSearch</h1>
					</Col>
				</Row>
				<Row>
					<Col size="md-12">
						<p>
							Use the searchbar to find a specific employee by name, and use the
							filters to narrow your search
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default About;
