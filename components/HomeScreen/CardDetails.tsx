import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

async function handlePayment(card: any) {
  Alert.alert("Payment", "Payment successful!");
}

export default function CardDetails(card: any) {

  const expiryDate = card.card.expiration_month + '/' + card.card.expiration_year.toString().slice(-2);

  return (
    <TouchableOpacity onPress={() => handlePayment(card)}>
      <View style={styles.container}>
        {card.card.brand === 'Visa' &&
          <Image source={require('@/assets/images/visa.webp')} style={{
            ...styles.cardImage,
            ...styles.visa,
          }}/>
        }

        {card.card.brand === 'MasterCard' &&
          <Image source={require('@/assets/images/mastercard.png')} style={{
            ...styles.cardImage,
            ...styles.mastercard,
          }}/>
        }

        <View style={styles.textContainer}>
          <Text style={styles.cardNumber}>• • • •</Text>
          <Text style={styles.cardNumber}>• • • •</Text>
          <Text style={styles.cardNumber}>• • • •</Text>
          <Text style={styles.cardNumber}>{card.card.last_digits}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.cardLabel}>
            Name on Card
          </Text>

          <Text style={styles.cardLabel}>
            Expires
          </Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.cardText}>
            {card.card.name}
          </Text>

          <Text style={styles.cardText}>
            {expiryDate}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
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