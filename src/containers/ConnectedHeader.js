import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../components/Header'

const mapStateToProps = (state, props) => {
    return {
        session: state.session,
        store: props.store,
    }
}

const ConnectedHeader = connect(mapStateToProps)(Header)

export default ConnectedHeader
