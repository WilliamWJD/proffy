import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import DaysModal from '../../components/DaysModal';

import styles from './styles';

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState({id:null, title:''});
  const [time, setTime] = useState('');

  const [modalDaysVisible, setModalDaysVisible] = useState(false)

  async function loadFavorites() {
    const response = await AsyncStorage.getItem('favorites');
    if (response) {
      const favoritedTeachers = JSON.parse(response);
      const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
        return teacher.id;
      });

      setFavorites(favoritedTeachersIds);
    }
  }

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();

    const day = week_day.id;

    const response = await api.get('/classes', {
      params: { week_day:day, subject, time },
    });
    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

  function showModalDaysVisible(){
    setModalDaysVisible(true)
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
      <DaysModal isVisible={modalDaysVisible} onCancel={setModalDaysVisible} isSelected={setWeekDay}/>  
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              placeholderTextColor="#c1bccc"
              style={styles.input}
              placeholder="Qual a matéria ?"
              value={subject}
              onChangeText={(text) => setSubject(text)}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <RectButton style={styles.input} onPress={showModalDaysVisible}>
                  <Text>{week_day.title}</Text>
                </RectButton>
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Qual horário"
                  value={time}
                  onChangeText={(text) => setTime(text)}
                />
              </View>
            </View>
            <RectButton
              onPress={handleFiltersSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        {teachers.map((item: Teacher) => {
          return (
            <TeacherItem
              key={item.id}
              teacher={item}
              favorited={favorites.includes(item.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
