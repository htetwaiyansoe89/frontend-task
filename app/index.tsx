import {Image, StyleSheet, Text, View} from 'react-native';
import React from "react";
import {Link} from "expo-router";
import {Labels} from "@/constants/Labels";
import {Colors} from "@/constants/Colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/card.png')}/>
      <Text style={styles.contentStyle}>No Cards Found</Text>
      <Text style={styles.contentStyle}>
        We recommend adding a card {"\n"}for easy payment
      </Text>
      <Link href="/card" style={styles.button}>
        {Labels.screenTitles.addCard}
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    color: '#000',
  },
  button: {
    color: Colors.primary,
    fontSize: 18,
  }
});