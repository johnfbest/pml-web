import React from 'react';
import Library from '../Library';
import { getBrowseList } from '../../Services/endpoints';

export default class Browse extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    async onLetterClicked(e) {
        let letter = e.target.innerHTML;
        let items = await getBrowseList(letter);
        this.setState({ items });
    }
    
    render() {
        let rows=[];
        for (let i=65; i<=90; i++){
            rows.push(<button className='pml-browse-letter' key={i} onClick={ this.onLetterClicked.bind(this) }>{ String.fromCharCode(i) }</button>);
        }

        return (
            <div>
                <p>Browse</p>
                <p className='pml-browse-conatiner'>
                    <span className='pml-browse-letters'>
                        { rows }
                    </span>
                </p>
                <Library items={ this.state.items }/>
            </div>
        );
    }
}