import './locales'
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { AppWrapper } from './AppWrapper'
import Home from './routes/index'
import {
    ViewSmsCommandAdd,
    ViewSmsCommandList,
    ViewSmsCommandEdit,
} from './sms-command'
import {
    ViewSmsGatewayAdd,
    ViewSmsGatewayList,
    ViewSmsGatewayEdit,
} from './sms-gateway'
import { ViewReceivedSmsList } from './sms-inbound'
import { ViewSentSmsList } from './sms-outbound'

export const App = () => (
    <AppWrapper>
        <Switch>
            {/* Home */}
            <Route exact path="/" component={Home} />

            {/* Gateway configuration */}
            <Route exact path="/sms-gateway" component={ViewSmsGatewayList} />
            <Route path="/sms-gateway/new" component={ViewSmsGatewayAdd} />
            <Route path="/sms-gateway/:id" component={ViewSmsGatewayEdit} />

            {/* Sms command */}
            <Route exact path="/sms-command" component={ViewSmsCommandList} />
            <Route path="/sms-command/new" component={ViewSmsCommandAdd} />
            <Route path="/sms-command/:id" component={ViewSmsCommandEdit} />

            {/* View sent sms */}
            <Route path="/sent" component={ViewSentSmsList} />

            {/* View received sms */ ''}
            <Route path="/received" component={ViewReceivedSmsList} />

            {/* Handle 404 */ ''}
            <Redirect from="*" to="/" />
        </Switch>
    </AppWrapper>
)
