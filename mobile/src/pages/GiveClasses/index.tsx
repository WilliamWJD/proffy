import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import givClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';
import DateTimePickerModal from '../../components/DateTimePickerModal/indes';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={givClassesBgImage}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor em nossa
          plataforma web.
        </Text>
      </ImageBackground>

      {/* <DateTimePickerModal/> */}
      
      <RectButton style={styles.okButton} onPress={handleNavigateBack}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
