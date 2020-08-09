import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";

import styles from "./styles";

interface ModalDaysProps {
  isVisible: boolean;
  onCancel: any;
  isSelected:object
}

const DaysModal: React.FC<ModalDaysProps> = ({ isVisible, onCancel, isSelected }) => {
  const [days, setDays] = useState([
    {
      id: 0,
      title: "Domingo",
    },
    {
      id: 1,
      title: "Segunda-Feira",
    },
    {
      id: 2,
      title: "Terça-Feira",
    },
    {
      id: 3,
      title: "Quarta-Feira",
    },
    {
      id: 4,
      title: "Quinta-Feira",
    },
    {
      id: 5,
      title: "Sexta-Feira",
    },
    {
      id: 6,
      title: "Sábado",
    },
  ]);

  function handleCloseModal() {
    onCancel(false);
  }

  function handleSelected(item:object){
    isSelected(item)
    onCancel(false)
  }

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <ScrollView style={styles.daysList}>
        {days.map((item) => (
          <TouchableOpacity key={item.id} style={styles.dayListItem} onPress={()=>handleSelected(item)}>
            <Text style={styles.dayListItemText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonCancel} onPress={handleCloseModal}>
          <Text style={styles.buttonCancelText}>CANCELAR</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default DaysModal;
