import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadLocalDataAsync } from '../actions/shared'

export const Main = (props) => {
    const {loadLocalDataAsync}  = props
    useEffect(() => {
        loadLocalDataAsync()
    }, [loadLocalDataAsync])
    return (
        <Text>
            {JSON.stringify(props)}
        </Text>
    )
}

Main.propTypes = {

}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = {
    loadLocalDataAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

