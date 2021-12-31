import React from 'react';
import { getLibraryItem } from '../../../Services/endpoints.js';

export default class LibraryItem extends React.Component {
    constructor(props) {
        super(props);

    
        this.state = {
            item: {}
        }
    }

    async getItem(id) {
        let data = await getLibraryItem(id);
        if (data) this.setState({ item: data });
    }

    componentDidMount() {
        this.getItem(this.props.id);
    }
    
    render() {
        let data = this.state.item;
    
        return (
            <div>
                <button onClick={ this.props.onBackClicked }>Back</button>
            { Object.keys(data).map( (key, i) => <p key={ i }><span>{ key }: </span><span>{ data[key] }</span></p> ) }
            </div>
        );
    }
}