import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'HrcentralWebPartStrings';
import Hrcentral from './components/Hrcentral';
import { IHrcentralProps } from './components/IHrcentralProps';
import { HttpClient,HttpClientResponse} from "@microsoft/sp-http"; 


export interface IHrcentralWebPartProps {
  description: string;
}

export default class HrcentralWebPart extends BaseClientSideWebPart<IHrcentralWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHrcentralProps> = React.createElement(
      Hrcentral,
      {
        description: this.properties.description
      }
    );
    this.test();
    
    ReactDom.render(element, this.domElement);
  }

  private test(){  
    alert("Hi this is test");
    //console.log("Hi this is test")
    this.context.httpClient
    .get('https://resourcerequestsoln.azurewebsites.net/api/WeatherForecast', HttpClient.configurations.v1)
    .then((res: HttpClientResponse): Promise<any> => {
      console.log("Hi this is testing machine test");
      console.log(res);
      return res.json();
      
    })
    .then((response: any): void => {
     
      console.log(response);
    }); 
  }  

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
