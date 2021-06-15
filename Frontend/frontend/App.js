import React, { Fragment } from 'react';
import { LogBox, StyleSheet } from 'react-native';
import Tablero from './componentes/Tablero';
import NombreJugadores from './componentes/NombreJugadores';
import MenuPrincipal from './componentes/MenuPrincipal';
import MenuEstadisticas from './componentes/MenuEstadisticas';

import JugadoresEmpate from './componentes/JugadoresEmpate';
import JugadoresVictorias from './componentes/JugadoresVictorias';
import MenorMovimientos from './componentes/MenorMovimientos';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import GameStore from './redux/Reducer';


LogBox.ignoreAllLogs(true)

const Stack = createStackNavigator();

const  App = () => {
  return (
    <Fragment>
      <Provider store={GameStore}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="MenuPrincipal" component={MenuPrincipal}     options={{ headerShown: false }}/>
            <Stack.Screen name="NombreJugadores" component={NombreJugadores}     options={{ title: '        Registro de jugadores' }}/>
            <Stack.Screen name="Tablero" component={Tablero}     options={{ title: '                  Juego' }}/>
            <Stack.Screen name="JugadoresEmpate" component={JugadoresEmpate}     options={{ title: '  Jugadores que han empatado' }}/>
            <Stack.Screen name="JugadoresVictorias" component={JugadoresVictorias}     options={{ title: '  Top 5 con más victorias' }}/>
            <Stack.Screen name="MenorMovimientos" component={MenorMovimientos}   options={{ title: '  Victoria en menos movimientos' }}/>
            <Stack.Screen name="MenuEstadisticas" component={MenuEstadisticas}   options={{  title: '               Estadisticas'  }}/>

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </Fragment>
     
    
  );
}

const styles = StyleSheet.create({
  
});

export default App;