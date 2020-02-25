import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { Snackbar } from 'react-native-paper';

import { postCurso } from '../../redux/actions/cursos'

class SnackbarDeleteCurso extends Component {
    state = {
        visible: false
    }

    handleUndoPress = () => {
        this.props.postCurso(this.props.cursoBorrado)
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.cursoBorrado) {
            this.setState({ visible: true })
        }
    }
    
    render() {
        const { visible } = this.state;

        return (
          <View style={styles.container}>
            <Snackbar
                visible={visible}
                onDismiss={() => this.setState({ visible: false })}
                action={{
                    label: 'Deshacer',
                    onPress: this.handleUndoPress
                }}
            >
            Curso borrado correctamente
            </Snackbar>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
});

const mapStateToProps = state => ({
    cursoBorrado: state.cursos.cursoBorrado
})

export default connect(mapStateToProps, { postCurso })(SnackbarDeleteCurso)
