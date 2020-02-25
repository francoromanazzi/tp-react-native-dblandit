import React from 'react'
import { StyleSheet, View } from 'react-native'
import { withTheme, Title, Text } from 'react-native-paper'

function MainTitle({ theme }) {
    return (
        <View style={styles.container}> 
            <Text style={styles.title}>
                Cursos{' '}     
                    <Text style={{ ...styles.title, color: theme.colors.accent }}>DB</Text>
                    land
                    <Text style={{ ...styles.title, color: theme.colors.accent }}>IT</Text>
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

export default withTheme(MainTitle)
