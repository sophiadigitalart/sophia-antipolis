import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Sophia Digital Art</h1>
            <p><a href="/aterrain.html">Vue globale</a></p>
            <p><a href="/batiments.html">Vue globale avec batiments</a></p>
            <p><a href="/vuebase.html">Vue de base</a></p>
            <p><a href="/version2.html">Version 2</a></p>
            
        </div>;
    }
}
