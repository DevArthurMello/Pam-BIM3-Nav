import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default function ProfileScreen({ linkClicks }) {

  return (
    <View style={styles.container}>

      <Image
        source={
          require('../../assets/perfil.jpg')
        }
        style={styles.avatar}
      />

      <Text style={styles.name}>
        Arthur e Kaio
      </Text>

      <Text style={styles.job}>
        Desenvolvedor React Native
      </Text>

      <View style={styles.card}>

        <Text style={styles.cardText}>
          Perfil oficial do Thur e do Kaio
        </Text>

      </View>

      <View style={styles.statsCard}>

        <Text style={styles.statsTitle}>
          Links úteis utilizados
        </Text>

        <Text style={styles.statsNumber}>
          {linkClicks}
        </Text>

        <Text style={styles.statsSubtitle}>
          vezes
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  job: {
    fontSize: 16,
    color: '#9CA3AF',
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#1F2937',
    padding: 20,
    borderRadius: 15,
    width: '100%',
  },

  cardText: {
    color: '#E5E7EB',
    fontSize: 16,
    textAlign: 'center',
  },

  // NOVOS ESTILOS

  statsCard: {
    marginTop: 20,
    backgroundColor: '#6C63FF',
    width: '100%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },

  statsTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 10,
  },

  statsNumber: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: 'bold',
  },

  statsSubtitle: {
    color: '#E0E7FF',
    fontSize: 16,
  },

});