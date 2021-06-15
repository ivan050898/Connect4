import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import GameStore from '../redux/Reducer';

const MiModal = ({Estado,Texto,Navigation}) => {
  const [modalVisible, setModalVisible] = useState(Estado);

  const VolveraJugar = () =>{
    setModalVisible(!modalVisible)
    Navigation.navigate('NombreJugadores')

  }

  const VolverMenuPrincipal = () =>{
      setModalVisible(!modalVisible)
      Navigation.navigate('MenuPrincipal')
}

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{Texto}</Text>
             <View style={{"flexDirection":"row"}}>
                <Pressable
                style={[styles.button1, styles.buttonClose]}
                onPress={() => VolveraJugar()}
                >
                <Text style={styles.textStyle}>Volver a jugar</Text>
                </Pressable>
                <Pressable
                style={[styles.button2, styles.buttonClose]}
                onPress={() => VolverMenuPrincipal()}
                >
                <Text style={styles.textStyle}>Menú Principal</Text>
                </Pressable>
             </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 180,
    position:"absolute",
    alignSelf:"center"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button1: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginRight:20
  },button2: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#000098",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    paddingBottom:15,
    textAlign: "center",
    fontSize:20,
    fontWeight: "bold",

  }
});

export default MiModal;