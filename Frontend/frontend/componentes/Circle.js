import React, { useState } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { connect } from 'react-redux';


const Circle = ({fila,col,Matriz,estado}) => {
    return <View style={[styles.circle,{backgroundColor: Matriz[fila][col]===0? "white": (
      Matriz[fila][col]===1? "red":"yellow"
    )}]}></View>;
  };
  

  const styles = StyleSheet.create({
   circle: {
     width: 50,
     height: 50,
     borderRadius: 50 / 2,
     alignItems:"center",
     alignContent:"center",
   },
 
 });
 

 const mapStateToProps = state =>{
    return {
      Matriz:state.Matriz,
      Jugador:state.Jugador
    }
  }
 

  
  export default connect(mapStateToProps)(Circle);