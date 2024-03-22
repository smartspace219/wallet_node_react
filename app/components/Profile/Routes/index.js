import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocation } from 'containers/App/selectors';
import BasicInfo from '../BasicInfo/Loadable';

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation()
});

function ProfileRoutes({ location }) {
  return (
    <Switch location={location}>
      <Route exact path="/*/dashboard/profile" render={props => <BasicInfo {...props} />} />
      <Route path="/*/dashboard/profile/basic-info" render={props => <BasicInfo {...props} />} />
    </Switch>
  );
}

export default connect(mapStateToProps)(ProfileRoutes);
