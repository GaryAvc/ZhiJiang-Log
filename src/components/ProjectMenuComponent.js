import React from 'react';
import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderMenuItem({ dish, onClick }) {
	return (
		<Card>
			<Link to={`/menu/${dish._id}`}>
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
				</CardBody>
				<CardImg width="100%" src={dish.image} alt={dish.name} />
			</Link>
		</Card>
	);
}

const ProjectMenu = (props) => {
	const menu = props.dishes.dishes.map((dish) => {
		return (
			<div key={dish._id} className="col-12 col-md-5 m-1">
				<RenderMenuItem dish={dish} />
			</div>
		);
	});

	if (props.dishes.isLoading) {
		return (
			<div className="container">
				<div className="row">
					<Loading />
				</div>
			</div>
		);
	} else if (props.dishes.errMess) {
		return (
			<div className="container">
				<div className="row">
					<h4>{props.dishes.errMess}</h4>
				</div>
			</div>
		);
	} else
		return (
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/home">Home</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>Courses</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>Courses</h3>
						<hr />
					</div>
				</div>
				<div className="row">{menu}</div>
			</div>
		);
};

export default ProjectMenu;
