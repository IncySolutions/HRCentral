import * as React from 'react';
import styles from './resourcerequest.module.scss';
import Button from '@material-ui/core/Button';



import{IResourceRequestProps} from './IResourceRequestProps'

export default class ResoureRequest extends React.Component<IResourceRequestProps, {}> {

    public render(): React.ReactElement<IResourceRequestProps> {
    return(

    <div>
          <Button variant="contained" color="primary">
         Hello World
         </Button>
        </div>
    );
    
}
}