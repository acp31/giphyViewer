import React, { Component } from 'react';

import Match from 'react-router/Match';

import Album from './Album';
import VerticalMenu from './VerticalMenu';
import { client } from '../Client';

class BannersContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetched: false,
      banners: []
    };

    this.getBanners = this.getBanners.bind(this);
  }

  componentDidMount() {
    this.getBanners();
  }

  getBanners() {
    client.getBanners(BANNER_IDS)
      .then((banners) => (
        this.setState({
          fetched: true,
          banners: banners
        })
        ));
  }
  render() {
    if(this.state.fetched){
      return (
        <div className='ui active centered inline loader' />
      );
    } else {
      return (
        <div className='ui two column divided grid'>
          <div
            className='ui six wide column'
            style={{ maxWidth: 250 }}
          >
          <VerticalMenu
            banners={this.state.banners}
            bannerPathnames={this.props.pathname}
          />
          </div>
          <div className='ui the wide column'>
            <Match exactly pattern={this.props.pathname} render={() => (
              <div>
                <h3>Please select a banner on the left</h3>
              </div>
            )} />
            <Match
              pattern={`${this.props.pathname}/:bannerId`}
              render={({ params }) => {
                const banner = this.state.banners.find(
                  (a) => a.id === params.bannerid
                );
                return (
                  <Banner 
                    banner={banner}
                    bannerPathnames={this.props.pathname}
                  />
                );
              }}
             />
          </div>
        </div>
      )
    }
  }
}

export default BannersContainer;