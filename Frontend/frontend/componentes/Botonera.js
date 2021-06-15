import React, { Fragment } from 'react';
import { StyleSheet, View,TouchableOpacity } from 'react-native';
import GameStore from '../redux/Reducer';
import {SetMatrizRedux} from '../redux/Actions'
import { connect } from 'react-redux';

  const Botonera = () => {
    const llenarCelda = (columna) => {
        let matriz = GameStore.getState().Matriz
        let Jugador = GameStore.getState().Jugador
        console.log(columna)
        for (let fila = 5; fila >= 0; fila--) {
            if (matriz[fila][columna]===0) {
                matriz[fila][columna] = Jugador;
                const State ={
                    Matriz:matriz,
                    Jugador:Jugador
                }
                GameStore.dispatch(SetMatrizRedux(State));
              break;
            }
        }
  }


    return <Fragment>
        <View style={styles.container} >
        {new Array(7).fill(0).map((_, i) => (
            <TouchableOpacity style={styles.touchable}  key={i} onPress={()=> llenarCelda(i)}/>
         ))}   
         </View>
    </Fragment>
  };


  const styles = StyleSheet.create({
    Botonera:{
        flexDirection:"row",
        paddingLeft:4
    },
    touchable:{
        alignItems: "center",
        width:55,
        height:50
  },Botonera:{
    flexDirection:"row",
    paddingLeft:4
  },
   });

 const mapStateToProps = state =>{
    return {
      Matriz:state.Matriz,
      Jugador:state.Jugador
    }
  }
 

  
  export default connect(mapStateToProps)(Botonera);