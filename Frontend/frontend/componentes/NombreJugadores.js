import React, {Fragment,useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image } from 'react-native'

const NombreJugadores = ({navigation}) => {
      const [NombreJugador1, setNombreJugador1] = useState('')   
      const [NombreJugador2, setNombreJugador2] = useState('')   

      const navegar = () =>{
         navigation.navigate('Tablero',{
            Jugador1Prop:NombreJugador1===''? 'Jugador 1':NombreJugador1,
            Jugador2Prop:NombreJugador2===''? 'Jugador 2':NombreJugador2,
         })
      }

      return (
          <Fragment>
         <View style={styles.textContainer}>
            <Image
            source={require('../assets/img1.png')}
            style = {styles.img}
            />         
         
         </View>
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Jugador 1"
               placeholderTextColor = "#000098"
               autoCapitalize = "none"
               textAlign="center" 
               value ={NombreJugador1}
               onChangeText= {(val)=>setNombreJugador1(val)}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Jugador 2"
               placeholderTextColor = "#000098"
               autoCapitalize = "none"
               textAlign="center"
               value ={NombreJugador2}
               onChangeText= {(val)=>setNombreJugador2(val)}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => navegar() 
               }>
               <Text style = {styles.submitButtonText}  textAlign="center"> Crear Partida </Text>
            </TouchableOpacity>
         </View>
         </Fragment>

      )
   
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 50
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#000098',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#000098',
      padding: 10,
      margin: 15,
      height: 40,
      alignItems:"center"
   },
   submitButtonText:{
      color: 'white'
   },
   textContainer:{
       paddingTop:30,
       paddingLeft:100
   },
   img:{
       height:200,
       width:200
   }


})

export default NombreJugadores
