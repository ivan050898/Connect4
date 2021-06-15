import React, { Fragment,useState,useEffect } from 'react';
import { StyleSheet, View,ActivityIndicator,TouchableOpacity,Text } from 'react-native';
import Row from './Row';
import { connect } from 'react-redux';
import { checkAll,checkDraw } from './utils/utils.js';
import MiModal from './Modal';
import Reloj from './reloj';
import { AntDesign } from '@expo/vector-icons'; 
import api from './api';
import axios from 'axios';



const Tablero = ({Matriz,Jugador,setMatriz,route,Jugador1,Jugador2,navigation,Id,Estado,Tiempo,Movimientos,Resultado}) => {
      const { Jugador1Prop, Jugador2Prop } = route.params;
      const [estadoDummy, setestadoDummy] = useState(0)
      const [estadoModal, setestadoModal] = useState(false)
      const [TextoModal, setTextoModal] = useState('')
      const [isStopwatchStart, setIsStopwatchStart] = useState(true);
      const [resetStopwatch, setResetStopwatch] = useState(false);
      useEffect(() => {
        axios.post(`${api}/CrearPartida`,{
          Jugador1:Jugador1Prop,
          Jugador2:Jugador2Prop,
        })
        .then( res => {
          const State ={
            Matriz:Array.from(Array(6), _ => Array(7).fill(0)),
            Jugador:1,
            Jugador1:Jugador1Prop,
            Jugador2:Jugador2Prop,
            Id:res.data.recordset[0].id,
            Estado:0,
            Tiempo:'',
            Movimientos:estadoDummy,
            Resultado:''

          } 
          setMatriz(State);
        })
        .catch( (error) => console.log('Error: ',JSON.stringify(error)));
        
      }, [])

      
      const llenarCelda = (columna) => {
        for (let fila = 5; fila >= 0; fila--) {
            if (Matriz[fila][columna]===0) {
              Matriz[fila][columna] = Jugador;
                const State ={
                    Matriz:Matriz,
                    Jugador:Jugador==1? 2:1,
                    Jugador1:Jugador1,
                    Jugador2:Jugador2,
                    Id:Id,
                    Estado:Estado,
                    Tiempo:'',
                    Movimientos:estadoDummy,
                    Resultado:''
                }
                setMatriz(State);
              break;
            }
        }
        setestadoDummy(estadoDummy+1);
        const checkwin=checkAll(Matriz)
        const checkdraw= checkDraw(Matriz);
        if(checkwin){
          let jugador=checkwin==1? Jugador1:Jugador2
          const State ={
            Matriz:Matriz,
            Jugador:Jugador,
            Jugador1:Jugador1,
            Jugador2:Jugador2,
            Id:Id,
            Estado:1,
            Tiempo:'',
            Movimientos:estadoDummy,
            Resultado:jugador
          }
          setMatriz(State);
          setestadoModal(true)
          setTextoModal(`¡El jugador: ${ jugador } ha ganado!`)
        }else if(checkdraw){
          const State ={
            Matriz:Matriz,
            Jugador:Jugador,
            Jugador1:Jugador1,
            Jugador2:Jugador2,
            Id:Id,
            Estado:1,
            Tiempo:'',
            Movimientos:estadoDummy,
            Resultado:''
          }
          setMatriz(State);
          setestadoModal(true)
          setTextoModal(`Los jugadores han empatado!`)

        }else{
           return;
        }
      }

      const printtiempo = (tiempo) =>{
        if(Estado===1 && tiempo!=='00:00:00'){
          setIsStopwatchStart(false)
          setResetStopwatch(true)
          axios.post(`${api}/EditarPartida`,{
            id:Id,
            resultado:Resultado,
            duracion:tiempo,
            movimientos:estadoDummy
          })
          .then( res => {
              console.log(res.data)
          })
          .catch( (error) => console.log('Error: ',JSON.stringify(error)));
        }
      }
      

    if (Matriz.length>0){
        return (
            <Fragment>
              {estadoModal && <MiModal Estado={estadoModal} Texto={TextoModal} Navigation={navigation}></MiModal>}
              <View style={styles.Timer}>
                  <Text style={styles.Textojugadores}>   Tiempo:  </Text>
                  <Reloj resetStopwatch={resetStopwatch} isStopwatchStart={isStopwatchStart} getTime={printtiempo} ></Reloj>
              </View>
              <View style={styles.jugadores}>
                  <View style={styles.FichaRoja}></View>
                  <Text style={styles.Textojugadores}>{Jugador1}</Text>
                 {estadoDummy%2===0 && <AntDesign name="caretleft" size={24} color="black" style={{"marginTop":6,"marginLeft":6}} />}
              </View>
              <View style={styles.jugadores}>
                  <View style={styles.FichaAmarilla}></View>
                  <Text style={styles.Textojugadores}>{Jugador2}</Text>
                  {estadoDummy%2!==0 && <AntDesign name="caretleft" size={24} color="black" style={{"marginTop":6,"marginLeft":6}} />}

              </View>

              <View style={styles.container}>
                <View style={styles.Botonera} >
                    {new Array(7).fill(0).map((_, i) => (
                        <TouchableOpacity style={styles.touchable}  key={i} onPress={()=> llenarCelda(i)}/>
                    ))}   
                 </View>
                {new Array(6).fill(0).map((_, i) => (
                  <Row fila={i} key={i} estado={estadoDummy}></Row>

                ))} 
              </View>
            </Fragment>
            
            
          );

    }else{
        return(
            <Fragment>
                <ActivityIndicator size="large" color="#00ff00" style={{"flex":1,"alignContent":'center',"alignItems":"center"}}/>
            </Fragment>
        )
    }

  }
  
const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:"white",
    },touchable:{
      alignItems: "center",
      width:55,
      height:50
    },Botonera:{
      flexDirection:"row",
      paddingLeft:4,
      paddingTop:0
    },jugadores:{
      flexDirection:"row",
      backgroundColor:"white",
      paddingTop:20
    },Timer:{
      backgroundColor:"white",   
      flexDirection:"row",

    },Textojugadores:{
      fontSize:25
    },FichaRoja:{
      width: 25,
      height: 25,
      borderRadius: 25 / 2,
      alignItems:"center",
      alignContent:"center",
      backgroundColor:"red",
      marginTop:4,
      marginRight:15,
      marginLeft:15
    },FichaAmarilla:{
      width: 25,
      height: 25,
      borderRadius: 25 / 2,
      alignItems:"center",
      alignContent:"center",
      backgroundColor:"yellow",
      marginTop:4,
      marginRight:15,
      marginLeft:15,
      marginBottom:35
    }  
 });

 const mapStateToProps = state =>{
   return {
     Matriz:state.Matriz,
     Jugador:state.Jugador,
     Jugador1:state.Jugador1,
     Jugador2:state.Jugador2,
     Id:state.Id,
     Estado:state.Estado,
     Tiempo:state.Tiempo,
     Movimientos:state.Movimientos,
     Resultado:state.Resultado

   }
 }

 const mapDispatchToProps = (dispatch) =>{
  return {
    setMatriz: (state)=> dispatch({ type: 'SetMatrizRedux',payload:state })

  }  

}

 
 export default connect(mapStateToProps,mapDispatchToProps)(Tablero);