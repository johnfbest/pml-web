import React from 'react';
// import logo from '../../assets/logo_trasparent_bg.png';

export default class About extends React.Component {
    constructor(props) {
      super(props);
    }

    async onSiteButtonClicked () {
      window.open('https://www.personabo.com', '_blank');
    }

    render() {
        return <div>
          {/* <img src={ logo }/> */}
          <p>Percussion Music Library</p>
          <p>Version 0.1.0</p>
          <p>Copyright 2022</p>
          {/* <button id='siteButton' onClick={ this.onSiteButtonClicked }></button> */}
        </div>
    }
}