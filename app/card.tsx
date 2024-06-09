import React from "react";
import {StyleSheet} from "react-native";
import AddCardInputFields from "@/components/Cards/AddCardInputFields";

export default function CardScreen() {
  return (
    <AddCardInputFields/>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 30,
    elevation: 25,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginRight: 50,
  },
  cardNumber: {
    fontSize: 20,
    color: '#808080',
  },
  cardLabel: {
    fontSize: 12,
    color: '#808080',
  },
  cardText: {
    fontSize: 16,
    color: '#000',
  },
  cardImage: {
    resizeMode: 'contain',
    height: 30,
  },
  mastercard: {
    width: 50,
  },
  visa: {
    width: 80,
  }
});
