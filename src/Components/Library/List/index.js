import React from 'react';
import { getLibraryList } from '../../../Services/endpoints.js';

export default class LibraryList extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            items: [{ _id: 1, Title: "Test", Composer: "Tester" }]
        }
    }

    componentDidMount(){
      this.getList();
    }

    async getList() {
        let data = await getLibraryList();
        if (data) this.setState({ items: data });
     }

    render() {
        let data = this.state.items;
        
        return (
        <div>
            { data.length && data.map( o => <div key={ o._id }><p><span data-id={ o._id } onClick={ this.props.onItemClick }>{ o.Title }</span> | <span>{ o.Composer }</span></p></div> ) }
        </div>
        );
    }
}