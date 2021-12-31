import React from 'react';
import { getLibraryList } from '../../../Services/endpoints.js';

export default class LibraryList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount(){ }

    async getList() {
        let data = await getLibraryList();
        if (data) this.setState({ items: data });
     }

    render() {
        let data = this.props.items ?? [];
        
        return (
        <div>
            { data.length ? 
                data.map( o => <p key={ o._id } >
                        <span data-id={ o._id } onClick={ this.props.onItemClick } className='library-item'>
                            <b className='noclick'>{ o.Title }</b> <i className='noclick'>by { o.Composer }</i>
                        </span>
                    </p>
                ) :
                (<p>no results</p>)
             }
        </div>
        );
    }
}