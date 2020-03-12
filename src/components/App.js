import React from 'react'

import ConnectedPostList from '../containers/ConnectedPostList'
import ConnectedFilterList from '../containers/ConnectedFilterList'
import ConnectedLoading from '../containers/ConnectedLoading'
import ConnectedErrorMessage from '../containers/ConnectedErrorMessage'
import ConnectedHeader from '../containers/ConnectedHeader'

import DevTools from '../containers/DevTools'

const App = ({ store }) => (
    <div>
        <h1>React/Redux blog</h1>
        <div>
            <ConnectedLoading store={store} />
        </div>
        <div>
            <ConnectedErrorMessage store={store} />
        </div>
        <hr />
        <div>
            <ConnectedHeader store={store} />
        </div>
        <hr />
        <div>
            <ConnectedFilterList store={store} />
        </div>
        <div>
            <ConnectedPostList store={store} />
        </div>
        {process.env.NODE_ENV !== 'production' && <DevTools store={store} />}
    </div>
)

export default App
