import React from 'react';
import { StyleSheet,View, } from 'react-native';
import Square from './Square';
import { connect } from 'react-redux';


const Row = ({fila,Matriz,Jugador,estado}) => {
    return (

      <View style={styles.container} >{
        new Array(7).fill(0).map((_, i) => (
          <Square fila={fila} col={i} key={i} estado={estado}></Square>
      ))} 
      </View>

    ); 

  };

    
const styles = StyleSheet.create({
    container:{
     flexDirection:"row",
     paddingLeft:4
    }
 
 });
 
 const mapStateToProps = state =>{
  return {
    Matriz:state.Matriz,
    Jugador:state.Jugador
  }
}

 export default connect(mapStateToProps)(Row);
