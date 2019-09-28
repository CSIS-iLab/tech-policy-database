import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainContainer from '../international-table/MainContainer'

const RouteContainer = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        {/* Addition Table Route to be placed here */}
      </Switch>
    </React.Fragment>
  )
}

export default RouteContainer
