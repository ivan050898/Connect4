import React,{useEffect,useState}  from 'react'
import { View, Text, StyleSheet,FlatList } from 'react-native'
import api from './api';
import axios from 'axios';



const MenorMovimientos = () => {
    const [Data,setData] = useState([])

    useEffect(() => {
        axios.get(`${api}/MenorMovimientos`).then( res => {
            setData(res.data)
            } 
          ).catch( (error) => console.log('Error: ',JSON.stringify(error)));
      
    }, [])
    return (
        <View style={styles.container}>
        <FlatList
          data={Data}
          renderItem={({ item }) => <View style={styles.list}>
            <Text style={styles.texto}>{item.Resultado}</Text>
            <Text style={styles.texto}>{item.Movimientos}</Text>

          </View>}
        />
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    list: {
      margin: 5,
      backgroundColor: 'white',
      height:80,
      justifyContent: 'space-around',
      paddingLeft: 10,
      elevation: 1,
      alignContent:'center',
      alignItems:'center'
    },
    texto:{
        fontSize:20,
        fontWeight:'bold'

    }
  });

  export default MenorMovimientos
