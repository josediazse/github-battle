import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'
import Home from './Home'
import Battle from './Battle'
import Popular from './Popular'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/battle' component={Battle}/>
                        <Route path='/popular' component={Popular}/>
                        <Route render={() => <p>Not Found</p>}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;