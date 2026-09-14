import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {

  const navigation = useNavigation();

  return (

    <ScrollView style={styles.container}>

      {/* HEADER */}

      <View style={styles.header}>

        <View>

          <Text style={styles.welcome}>
            Bem-vindo ao nosso trabalho de PAM
          </Text>

          <Text style={styles.username}>
            Arthur e Kaio
          </Text>

        </View>

        <Image
          source={ 
            require('../../assets/perfil.jpg')
          }
          style={styles.avatar}
        />

      </View>

      <View style={styles.mainCard}>

        <Text style={styles.mainTitle}>
          Navegue rapidamente
        </Text>

        <Text style={styles.mainSubtitle}>
          Aqui temos links uteis e um perfil personalizado para você.
        </Text>

        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => navigation.navigate('Perfil')}
        >

          <Text style={styles.mainButtonText}>
            Abrir Perfil
          </Text>

        </TouchableOpacity>

      </View>

      <View style={styles.infoCard}>

        <Ionicons
          name="rocket"
          size={40}
          color="#FFFFFF"
        />

        <Text style={styles.infoTitle}>
          Continue evoluindo
        </Text>

        <Text style={styles.infoText}>
          Fizemos esse trabalho com o intuito de treinar Tabs, Stack e Drawer.
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    padding: 20,
  },

  header: {
    marginTop: 40,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  welcome: {
    color: '#94A3B8',
    fontSize: 16,
  },

  username: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  mainCard: {
    backgroundColor: '#6C63FF',

    marginTop: 30,
    padding: 25,
    borderRadius: 20,
  },

  mainTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
  },

  mainSubtitle: {
    color: '#E0E7FF',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 25,
  },

  mainButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  mainButtonText: {
    color: '#6C63FF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 35,
    marginBottom: 20,
  },

  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  actionCard: {
    backgroundColor: '#1E293B',

    width: '30%',
    height: 110,

    borderRadius: 18,

    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    color: '#FFFFFF',
    marginTop: 10,
    fontSize: 15,
  },

  infoCard: {
    backgroundColor: '#1E293B',

    marginTop: 35,
    marginBottom: 40,

    padding: 25,
    borderRadius: 20,

    alignItems: 'center',
  },

  infoTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },

  infoText: {
    color: '#CBD5E1',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },

});