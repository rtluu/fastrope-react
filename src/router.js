import React, {Component} from 'react'

import Home from './containers/home.js'
import Team from './containers/team.js'

class Router extends Component {
  render() {
    const hash = this.props.location[0]

// Put your routes in this switch statement.
    switch (hash)  {
      case '':
        return <Home {...this.props} />;
      case 'team':
        return <Team {...this.props} />;
      default:
        return (
          <div>
            Page Not Found
          </div>
        );
    }
  }
}

export default Router
