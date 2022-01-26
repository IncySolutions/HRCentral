import * as React from 'react';
import styles from './resourcerequest.module.scss';

import{IResourceRequestProps} from './IResourceRequestProps'

export default class ResoureRequest extends React.Component<IResourceRequestProps, {}> {

    public render(): React.ReactElement<IResourceRequestProps> {
    return(

    <div className={styles.color}>
        this is an resource Request PAGE
        </div>
    );
    
}
}