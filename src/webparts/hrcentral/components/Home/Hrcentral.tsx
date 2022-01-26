import * as React from 'react';
import styles from '../Hrcentral.module.scss';
import { IHrcentralProps } from './IHrcentralProps';
import { escape } from '@microsoft/sp-lodash-subset';
import "bootstrap/dist/css/bootstrap.min.css"; 
import { HashRouter, Route } from "react-router-dom";
import ResoureRequest from '../ResourceRequest/resourcerequest';


export default class Hrcentral extends React.Component<IHrcentralProps, {}> {
  public render(): React.ReactElement<IHrcentralProps> {
    return (
      <div>
        <a href="#">This is Home</a>
        <a href="#/rr">This is resource</a>
      <HashRouter>        
        <Route path="/rr" component={ResoureRequest}></Route>        
        </HashRouter>
        </div>

    );
  }
}
