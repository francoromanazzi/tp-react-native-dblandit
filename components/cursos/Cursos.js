import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux'

import { getCursos } from '../../redux/actions/cursos'

import MainTitle from './MainTitle'
import CursosItem from './CursosItem'
import CursosFilter from './CursosFilter'
import SnackbarDeleteCurso from './SnackbarDeleteCurso'

class Cursos extends Component {
    componentDidMount() {
        this.props.getCursos();
    }

    renderCursosItem = ({ item }) => (<CursosItem key={item._id} curso={item} />)

    keyExtractor = item => item._id

    renderHeader = () => (<View>
        <MainTitle />
        <CursosFilter />
    </View>)

    render() {
        const { cursos: { cursos } } = this.props;

        return (
            <View style={styles.container}>
                <FlatList
                    data={cursos}
                    renderItem={this.renderCursosItem}
                    keyExtractor={this.keyExtractor}
                    ListHeaderComponent={this.renderHeader}
                />
                <SnackbarDeleteCurso />    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      marginTop: Constants.statusBarHeight,
      flex:1
    }
});

const mapStateToProps = (state) => ({
    cursos: state.cursos
})

export default connect(mapStateToProps, { getCursos })(Cursos)
