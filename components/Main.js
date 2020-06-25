import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadLocalData } from '../actions/shared'

export const Main = (props) => {
    const {loadLocalData}  = props
    useEffect(() => {
        loadLocalData()
    }, [loadLocalData])
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
    loadLocalData
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

