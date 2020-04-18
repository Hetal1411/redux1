import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PaginationPage from './PaginationPage'
import ReduxDemo from './ReduxDemo'
import ButtonClick from './ButtonClick'

const Main = () => (
    <main>
        <Switch>
        <Route path='/PaginationPage' component={PaginationPage}/>
        <Route path='/ReduxDemo' component={ReduxDemo}/>
        <Route path='/ButtonClick' component={ButtonClick}/>
        </Switch>
    </main>
)
export default Main