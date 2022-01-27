import * as React from 'react';
import styles from './resourcerequest.module.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Paper } from "@material-ui/core";




import{IResourceRequestProps} from './IResourceRequestProps'

export default class ResoureRequest extends React.Component<IResourceRequestProps, {}> {

    public render(): React.ReactElement<IResourceRequestProps> {
    return(

    <div>
         <Paper>
        <form>
  <TextField id="standard-basic" label="Standard" />

</form>
          <Button variant="contained" color="primary">
         Hello World
         </Button>
         </Paper>
        </div>
    );
    
}
}