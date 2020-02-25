import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux'

import { getCursos } from '../../redux/actions/cursos'

import MainTitle from './MainTitle'
import CursosItem from './CursosItem'
import CursosFilter from './CursosFilter'
import SnackbarDeleteCurso from './SnackbarDeleteCurso'

class Cursos extends Component {
    styles = StyleSheet.create({
        container: {
          marginTop: Constants.statusBarHeight,
        }
    });

    componentDidMount() {
        this.props.getCursos();
    }

    render() {
        const { cursos: { cursos } } = this.props;

        return (
            <View style={this.styles.container}>
                <ScrollView>
                    <MainTitle />
                    <CursosFilter />
                    {cursos && cursos.map(curso => <CursosItem key={curso._id} curso={curso} />)}
                </ScrollView>
                <SnackbarDeleteCurso />    
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    cursos: state.cursos
})

export default connect(mapStateToProps, { getCursos })(Cursos)
