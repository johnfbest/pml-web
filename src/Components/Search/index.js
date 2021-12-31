import React from 'react';
import Library from '../Library';
import { searchForItems } from '../../Services/endpoints';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

    
        this.state = {
            searchTerms: [{ type: 'Title', value: ''}],
            items: []
        }
    }

    onTermsChanged(e) {
        let i = e.target.getAttribute('data-index');
        let v = e.target.value;
        let searchTerms = this.state.searchTerms;

        switch (e.target.nodeName){
            case 'SELECT':
                searchTerms[i].type = v;
                break;
            case 'INPUT':
                searchTerms[i].value = v;
                break;
            case 'BUTTON':
                searchTerms.push({ type: 'Title', value: ''});
                break;
        }

        this.setState({ searchTerms })
    }

    async onSearchClicked() {
        console.log(this.state.searchTerms);
        let items = await searchForItems(this.state.searchTerms);
        this.setState({ items });
    }
    
    render() {
        let inputs = [];
        this.state.searchTerms.forEach( (term, i) => {
            inputs.push(<p key={i}>
                <select data-index={i} value={ term.type } onChange={ this.onTermsChanged.bind(this) }>
                    <option value='Title'>Title</option>
                    <option value='Composer'>Composer</option>
                </select>
                <input data-index={i} value={ term.value } onChange={ this.onTermsChanged.bind(this) }/>
            </p>);
        });

        return (
            <div>
                <p>Search</p>
                { inputs }
                <p><button onClick={ this.onTermsChanged.bind(this) }>+Add</button></p>
                <p><button onClick={ this.onSearchClicked.bind(this) }>GO</button></p>
                <hr/>
                <Library items={ this.state.items }/>
            </div>
        );
    }
}