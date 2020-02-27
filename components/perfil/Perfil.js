import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { withTheme, Text, Button, Avatar } from 'react-native-paper'
import Constants from 'expo-constants';

import { logoutUser } from '../../redux/actions/auth'


function Perfil({ user, logoutUser, theme }) {

    function handleLogoutPress() {
        logoutUser()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido, {user.username}</Text>
            <Avatar.Icon
                size={144} 
                icon="account"
                color='#f3f3f3'
                style={{...styles.avatar, backgroundColor: theme.colors.accentLight}}
            />
            <Button
                icon="logout"
                mode="contained"
                onPress={handleLogoutPress}
                style={styles.submitBtn}    
                color={theme.colors.primary}
            >
                Salir
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        marginVertical: 12,
        fontSize: 32,
        fontWeight: '600'
    },
    avatar: {
        marginVertical: 12,
    },
    submitBtn: {
        marginVertical: 24,
        width: '42.5%',
    }
})

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps, { logoutUser })(withTheme(Perfil))
