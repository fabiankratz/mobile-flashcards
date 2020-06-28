import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Text, View } from 'react-native'

export const Quiz = () => {
    return (
        <View>
            <Text>
                Quiz
            </Text>
        </View>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
