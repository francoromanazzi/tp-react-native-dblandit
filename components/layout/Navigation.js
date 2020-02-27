import React from 'react';
import { connect } from 'react-redux';
import { withTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons } from 'react-native-vector-icons';

import Cursos from '../cursos/Cursos'
import AddCurso from '../addCurso/AddCurso'
import Login from '../login/Login'

const Tab = createMaterialBottomTabNavigator();

function Navigation({ theme, isAuthenticated }) {

    const authRoutes = (
        <Tab.Screen
        name="Agregar"
        component={AddCurso}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={22} />
          ),
        }}
      />
    )

    const guestRoutes = (
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="login" color={color} size={22} />
          ),
        }}
      />
    )

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
                  <MaterialIcons name="home" color={color} size={22} />
                ),
              }}
            />
            {isAuthenticated ? authRoutes : guestRoutes}
          </Tab.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(withTheme(Navigation))
