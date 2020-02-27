import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { withTheme, Text, TextInput, Button } from 'react-native-paper'
import Constants from 'expo-constants';

import getErrorForParam from '../../utils/getErrorForParam'
import { loginUser } from '../../redux/actions/auth'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        const { username, password } = this.state;

        this.props.loginUser({ username, password })
    }

    render() {
        const { username, password } = this.state;
        const { errors, theme } = this.props;

        const errores = {
            username: getErrorForParam(errors, 'username'),
            password: getErrorForParam(errors, 'password')            
        }
        
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    label={errores.username || 'Username'}
                    value={username}
                    onChangeText={this.handleChange.bind(this, 'username')}
                    style={styles.input}
                    dense
                    error={!!errores.username}
                    placeholder="Username"
                />
                <TextInput
                    label={errores.password || 'Password'}
                    value={password}
                    onChangeText={this.handleChange.bind(this, 'password')}
                    style={styles.input}
                    dense
                    error={!!errores.password}
                    placeholder="Password"
                    secureTextEntry
                />
                <Button
                    mode="contained"
                    onPress={this.handleSubmit}
                    style={styles.submitBtn}    
                    color={theme.colors.accentLight}
                >
                    Ingresar
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        alignItems: 'center',
    },
    title:  {
        marginVertical: 12,
        fontSize: 32,
        fontWeight: '600'     
    },
    input: {
        width: '85%',
        marginVertical: 4,
        backgroundColor: '#f3f3f3'
    },
    submitBtn: {
        marginVertical: 24,
        width: '85%',
    }
});

const mapStateToProps = state => ({
    errors: state.errors.login
})

export default connect(mapStateToProps, { loginUser })(withTheme(Login))
