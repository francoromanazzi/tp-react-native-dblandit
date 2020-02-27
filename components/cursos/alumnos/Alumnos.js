import React, { Component } from 'react'
import { List } from 'react-native-paper'
import { MaterialIcons } from 'react-native-vector-icons';

import AlumnosItem from './AlumnosItem'

class Alumnos extends Component {
    state = {
        open: false
    }

    handlePress = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render() {
        const { open } = this.state;
        const { alumnos } = this.props;

        return (
            <List.Section>
                <List.Accordion
                    title="Alumnos"
                    left={props => <MaterialIcons name="group" size={18} />}
                    expanded={open}
                    onPress={this.handlePress}
                >
                    {alumnos.length > 0 &&
                        alumnos        
                            .sort((alu1, alu2) => alu2.nota - alu1.nota)
                            .map((alumno, i) => <AlumnosItem key={i} alumno={alumno}/>)
                    }
                </List.Accordion>
            </List.Section>
        )
    }
}

export default Alumnos