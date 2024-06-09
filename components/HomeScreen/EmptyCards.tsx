import {Image, StyleSheet, Text, View} from "react-native";
import {Labels} from "@/constants/Labels";
import {Link} from "expo-router";
import React from "react";
import {Colors} from "@/constants/Colors";

export default function EmptyCards() {
  return (
    <View style={styles.container}>

      <Image source={require('@/assets/images/card.png')}/>

      <Text style={styles.contentStyle}>
        {Labels.content.noCards}
      </Text>

      <Text style={styles.contentStyle}>
        {Labels.content.addCard}
      </Text>

      <Link href="/card" style={styles.button}>
        {Labels.screenTitles.addCard}
      </Link>
    </View>
  )
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