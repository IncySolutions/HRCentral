import * as React from 'react';
import styles from './home.module.scss';
import{IHomeProps} from './IHomeProps';

export default class Home extends React.Component<IHomeProps, {}> {

    public render(): React.ReactElement<IHomeProps> {
    return(

    <div className={styles.color}>
        this is an home PAGE
        </div>
    );
    
}
}