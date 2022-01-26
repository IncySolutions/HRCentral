import * as React from 'react';
import styles from './Hrcentral.module.scss';
import { IHrcentralProps } from './IHrcentralProps';
import { escape } from '@microsoft/sp-lodash-subset';
require('./Styles/customCSS.css');


export default class Hrcentral extends React.Component<IHrcentralProps, {}> {
	public render(): React.ReactElement<IHrcentralProps> {
		return (
			<div id="Web_1366__1">
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
							<a className="navbar-brand" href="#">WebSiteName</a>
						</div>
						<ul className="nav navbar-nav">
							<li className="active"><a href="#">Home</a></li>
							<li><a href="#">Page 1</a></li>
							<li><a href="#">Page 2</a></li>
							<li><a href="#">Page 3</a></li>
						</ul>
					</div>
				</nav>
			</div>
			
		);
	}
}
