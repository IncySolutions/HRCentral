import * as React from 'react';
// import styles from '../Hrcentral.module.scss';
import { IHrcentralProps } from './IHrcentralProps';
import { escape } from '@microsoft/sp-lodash-subset';
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route } from "react-router-dom";
import ResoureRequest from '../ResourceRequest/resourcerequest';


export default class Hrcentral extends React.Component<IHrcentralProps, {}> {
  public render(): React.ReactElement<IHrcentralProps> {
    return (
      <div>

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




        <a href="#">This is Home</a>
        <a href="#/rr">This is resource</a>
        <HashRouter>
          <Route path="/rr" component={ResoureRequest}></Route>
        </HashRouter>
      </div>

    );
  }
}
