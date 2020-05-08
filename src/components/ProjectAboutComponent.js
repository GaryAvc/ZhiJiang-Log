import React from 'react';
import {
	Breadcrumb,
	BreadcrumbItem,
	Card,
	CardBody,
	CardHeader,
	Media,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { Fade, Stagger } from 'react-animation-components';

function RenderLeader({ leader }) {
	return (
		<Media className="media-professor" tag="li">
			<Media left middle>
				<Media
					className="media-image"
					object
					src={leader.image}
					alt={leader.name}
				/>
			</Media>
			<Media body className="ml-5">
				<Media heading>{leader.name}</Media>
				<p>{leader.designation}</p>
				<p>{leader.description}</p>
			</Media>
		</Media>
	);
}

function LeaderList(props) {
	const leaders = props.leaders.leaders.map((leader) => {
		return (
			<Fade in key={leader._id}>
				<div className="col-12 mt-2">
					<RenderLeader leader={leader} />
				</div>
			</Fade>
		);
	});

	if (props.leaders.isLoading) {
		return <Loading />;
	} else if (props.leaders.errMess) {
		return (
			<div className="col-12">
				<h4>{props.leaders.errMess}</h4>
			</div>
		);
	} else {
		return (
			<Media list>
				<Stagger in>{leaders}</Stagger>
			</Media>
		);
	}
}

function ProjectAbout(props) {
	return (
		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/home">Home</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>About Us</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h3>About Us</h3>
					<hr />
				</div>
			</div>

			<div className="row row-content">
				<div className="col-12">
					<h2>Professor Information</h2>
				</div>
				<LeaderList leaders={props.leaders} />
			</div>

			<div className="row row-content">
				<div className="col-12 col-md-6">
					<h2>Our History</h2>
					<p>
						<em>
							Kean faculty and staff are here to help our students succeed.{' '}
						</em>
					</p>
					<p>
						Kean is dedicated to academic excellence for everyone. Our students
						benefit from world-class instruction, meaningful research and career
						opportunities from the humanities to business, the sciences and
						beyond. Each of our academic programs is designed to prepare you to
						launch a meaningful career
					</p>
				</div>
				<div className="col-12 col-md-5">
					<Card>
						<CardHeader className="bg-primary text-white">
							Facts At a Glance
						</CardHeader>
						<CardBody>
							<dl className="row p-1">
								<dt className="col-6">Started</dt>
								<dd className="col-6">since 1855</dd>
								<dt className="col-6">Academic staff</dt>
								<dd className="col-6">1,432</dd>
								<dt className="col-6">Students</dt>
								<dd className="col-6">16,633</dd>
								<dt className="col-6">Motto</dt>
								<dd className="col-6">Semper Discens</dd>
							</dl>
						</CardBody>
					</Card>
				</div>
				<div className="col-12 motto">
					<Card>
						<CardBody className="bg-faded">
							<blockquote className="blockquote">
								<p className="mb-0">
									You better cut the pizza in four pieces because I'm not hungry
									enough to eat six.
								</p>
								<footer className="blockquote-footer">
									Yogi Berra,
									<cite title="Source Title">
										The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books,
										2014
									</cite>
								</footer>
							</blockquote>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default ProjectAbout;
