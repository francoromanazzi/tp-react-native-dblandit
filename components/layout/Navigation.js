import React from 'react';
import { withTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons } from 'react-native-vector-icons';

import Cursos from '../cursos/Cursos'

const Tab = createMaterialBottomTabNavigator();

function Navigation({ theme }) {
    return (
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Cursos"
            activeColor={theme.colors.accentLight}
            barStyle={{ backgroundColor: theme.colors.primary }}
          >
            <Tab.Screen
              name="Cursos"
              component={Cursos}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="group" color={color} size={22} />
                ),
              }}
            />
            <Tab.Screen
              name="Agregar"
              component={Cursos}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="plus" color={color} size={22} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
    )
}

export default withTheme(Navigation)
