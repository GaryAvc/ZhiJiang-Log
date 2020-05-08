import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';
import { Link } from 'react-router-dom';

function RenderCard({ item, isLoading, errMess }) {
	if (isLoading) {
		return <Loading />;
	} else if (errMess) {
		return <h4>{errMess}</h4>;
	} else
		return (
			<FadeTransform
				in
				transformProps={{
					exitTransform: 'scale(0.5) translateY(-50%)',
				}}
			>
				<Card>
					<CardImg src={item.image} alt={item.name} />
					<CardBody>
						<CardTitle>{item.name}</CardTitle>
						<CardText>{item.description}</CardText>
					</CardBody>
				</Card>
			</FadeTransform>
		);
}

function ProjectHome(props) {
	return (
		<div className="container">
			<div className="row align-items-start">
				<div className="col-12 col-md m-1">
					<FadeTransform
						in
						transformProps={{
							exitTransform: 'scale(0.5) translateY(-50%)',
						}}
					>
						<Card>
							<Link to={'/menu'}>
								<CardImg src={'assets/images/arrange.gif'} alt={'register'} />
								<CardBody>
									<CardTitle>{'Register'}</CardTitle>
									<CardText>{'Register Now'}</CardText>
								</CardBody>
							</Link>
						</Card>
					</FadeTransform>
				</div>
				<div className="col-12 col-md m-1">
					<FadeTransform
						in
						transformProps={{
							exitTransform: 'scale(0.5) translateY(-50%)',
						}}
					>
						<Card>
							<Link to={'/favorites'}>
								<CardImg src={'assets/images/register.gif'} alt={'arrange'} />
								<CardBody>
									<CardTitle>{'Arrange'}</CardTitle>
									<CardText>{'Arrange your courses Now'}</CardText>
								</CardBody>
							</Link>
						</Card>
					</FadeTransform>
				</div>
				<div className="col-12 col-md m-1">
					<FadeTransform
						in
						transformProps={{
							exitTransform: 'scale(0.5) translateY(-50%)',
						}}
					>
						<Card>
							<Link to={'/aboutus'}>
								<CardImg
									src={'assets/images/professor.gif'}
									alt={'professor'}
								/>
								<CardBody>
									<CardTitle>{'See Professor Info'}</CardTitle>
									<CardText>
										{'Check out your professor information Now'}
									</CardText>
								</CardBody>
							</Link>
						</Card>
					</FadeTransform>
				</div>
			</div>
		</div>
	);
}

export default ProjectHome;
