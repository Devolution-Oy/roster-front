import React, { Component } from 'react';

import { AuthContext, withAuthorization } from '../components/Session';

class AdminPage extends Component {

  render() {
    return (
      <AuthContext.Consumer>
        {authUser => (
          <div>
            <h1>Admin page content will be shown here</h1>
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(AdminPage);
