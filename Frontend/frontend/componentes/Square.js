import Circle from "./Circle";
import React from 'react';
import { StyleSheet,View, } from 'react-native';
import { connect } from 'react-redux';

  const Square = ({fila,col,Matriz,estado}) => {
    return <View style={styles.square}>       
      <Circle  estado={estado} fila={fila} col={col}></Circle>
    </View>;
  };



  const styles = StyleSheet.create({
    square: {
     width: 55,
     height: 55,
     backgroundColor: "blue",
     alignItems:"center",
     alignContent:"center",
   }
 
 });

 const mapStateToProps = state =>{
  return {
    Matriz:state.Matriz,
    Jugador:state.Jugador
  }
}

 export default connect(mapStateToProps)(Square);
