import * as React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
// import Inbox from './Inbox'
// import Notifications from './Notifications'
// import Calendar from './Calendar'
import Attachments from './Attachments'
// import Favourites from './Favourites'
import { DrawerRouterContainer } from '../containers/DrawerRouterContainer'
import '../App.scss'

export const MyDrawer = () => {
  return (<>
      <HashRouter>
        <DrawerRouterContainer>
          <Route exact={true} path="/attachments" component={Attachments} />
        </DrawerRouterContainer>
      </HashRouter>
    </>
  )
}