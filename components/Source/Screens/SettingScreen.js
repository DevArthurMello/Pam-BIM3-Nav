import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SettingsScreen({
    linkClicks,
  setLinkClicks,
}) {

  // FUNÇÃO PARA ABRIR LINKS

  async function openLink(url) {

    const supported = await Linking.canOpenURL(url);
    setLinkClicks((prev) => prev + 1);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Erro', 'Não foi possível abrir o link.');
    }

  }

  return (
    <ScrollView style={styles.container}>

      

      <View style={styles.header}>

        <Ionicons
          name="settings"
          size={60}
          color="#6C63FF"
        />

        <Text style={styles.title}>
          Likns Úteis
        </Text>

        <Text style={styles.subtitle}>
          Links e páginas externas
        </Text>

      </View>

      

      <TouchableOpacity
        style={styles.option}
        onPress={() =>
          openLink('https://www.google.com')
        }
      >

        <View style={styles.leftContent}>

          <Ionicons
            name="globe"
            size={28}
            color="#6C63FF"
          />

          <Text style={styles.optionText}>
            Abrir Google
          </Text>

        </View>

        <Ionicons
          name="open-outline"
          size={22}
          color="#999"
        />

      </TouchableOpacity>

      
      <TouchableOpacity
        style={styles.option}
        onPress={() =>
          openLink('https://www.youtube.com')
        }
      >

        <View style={styles.leftContent}>

          <Ionicons
            name="logo-youtube"
            size={28}
            color="#FF0000"
          />

          <Text style={styles.optionText}>
            Abrir YouTube
          </Text>

        </View>

        <Ionicons
          name="open-outline"
          size={22}
          color="#999"
        />

      </TouchableOpacity>

      

      <TouchableOpacity
        style={styles.option}
        onPress={() =>
          openLink('https://github.com')
        }
      >

        <View style={styles.leftContent}>

          <Ionicons
            name="logo-github"
            size={28}
            color="#FFFFFF"
          />

          <Text style={styles.optionText}>
            Abrir GitHub
          </Text>

        </View>

        <Ionicons
          name="open-outline"
          size={22}
          color="#999"
        />

      </TouchableOpacity>

      

      <TouchableOpacity
        style={styles.option}
        onPress={() =>
          openLink('https://instagram.com')
        }
      >

        <View style={styles.leftContent}>

          <Ionicons
            name="logo-instagram"
            size={28}
            color="#E1306C"
          />

          <Text style={styles.optionText}>
            Abrir Instagram
          </Text>

        </View>

        <Ionicons
          name="open-outline"
          size={22}
          color="#999"
        />

      </TouchableOpacity>

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
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },

  subtitle: {
    color: '#94A3B8',
    fontSize: 16,
    marginTop: 5,
  },

  option: {
    backgroundColor: '#1E293B',

    padding: 18,
    borderRadius: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 15,
  },

  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  optionText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 15,
  },

});