import React from 'react'

import ConnectedRegistration from '../containers/ConnectedRegistration'
import ConnectedCreatePost from '../containers/ConnectedCreatePost'
import ConnectedLogin from '../containers/ConnectedLogin'
import User from './User'

const Header = ({ store, session }) => (
    <div>
        {!session && (
            <div>
                <ConnectedRegistration store={store} />
            </div>
        )}
        {!session && (
            <div>
                <ConnectedLogin store={store} />
            </div>
        )}
        {session && (
            <div>
                <b>Logged in as:</b> <User {...session} />
            </div>
        )}
        {session && (
            <div>
                <ConnectedCreatePost store={store} />
            </div>
        )}
    </div>
)

export default Header
