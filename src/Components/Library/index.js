import React from 'react';
import LibraryList from './List'
import LibraryItem from './Item'


export default class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showList: true, currentItem: 0 }
  }

  componentDidMount() {

  }

  onItemClick(e) {
    console.log(e);
    let id = e.target.getAttribute('data-id');
    if (!id) return;
    console.log(id);
    this.setState({ currentItem: id, showList: false });
  }

  onBackClicked() {
    this.setState({ currentItem: 0, showList: true });
  }

  render() {
    return this.state.showList ? 
        (<LibraryList onItemClick={ this.onItemClick.bind(this) }/>) :
        (<LibraryItem id={ this.state.currentItem } onBackClicked={ this.onBackClicked.bind(this) }/>);
  }
}