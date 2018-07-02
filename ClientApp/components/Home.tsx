import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Sophia Digital Art</h1>
            <p><a href="/antibes.html">Antibes</a></p>
            <p><a href="/antibes2.html">Antibes2</a></p>
            <p><a href="/vuebase.html">Vue de base</a></p>
            <p><a href="/version2.html">Saint-Philippe Version 2</a></p>
            
        </div>;
    }
}
