import React from 'react'
import { StyleSheet, View } from 'react-native'
import { withTheme, Text } from 'react-native-paper'

function MainTitle() {
    return (
        <View style={styles.container}> 
            <Text style={styles.title}>
                Agregar curso
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        marginVertical: 12,
        fontSize: 32,
        fontWeight: '600'
    }
})

export default MainTitle
