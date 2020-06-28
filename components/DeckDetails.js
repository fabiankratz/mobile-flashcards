import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

export const DeckDetails = (props) => {
    const { route, navigation } = props
    return (
        <View>
            <Text>
                { route.params.title }
            </Text>
        </View>
    )
}

const mapStateToProps = (state, props) => ({
    ...props
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetails)
