import React, {Fragment } from 'react'
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native'

const MenuPrincipal = ({navigation}) => {

      return (
          <Fragment>
         <View style={styles.textContainer}>
            <Image
            source={require('../assets/img1.png')}
            style = {styles.img}
            />         
         
         </View>
         <View style = {styles.container}>   
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => navigation.navigate('NombreJugadores')
               }>
               <Text style = {styles.submitButtonText}  textAlign="center"> Jugar </Text>
            </TouchableOpacity>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => navigation.navigate('MenuEstadisticas')
               }>
               <Text style = {styles.submitButtonText}  textAlign="center"> Estadisticas </Text>
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
      width:300,
      alignItems:"center",
      justifyContent:"center",
      marginLeft:50,
   },
   submitButtonText:{
      color: 'white'
   },
   textContainer:{
       paddingTop:100,
       paddingLeft:100
   },
   img:{
       height:200,
       width:200
   }


})

export default MenuPrincipal
