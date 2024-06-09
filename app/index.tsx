import React from "react";
import EmptyCards from "@/components/home-screen/EmptyCards";
import CardDetails from "@/components/home-screen/CardDetails";
import {FlatList} from "react-native";

type Card = {
  cardNumber: string;
  name: string;
  expiry: string;
  type: string;
};

export default function HomeScreen() {

  const cards = [
    {
      cardNumber: '• • • • 1 2 3 4',
      name: 'John Doe',
      expiry: '12/23',
      type: 'mastercard'
    },
    {
      cardNumber: '• • • • 5 6 7 8',
      name: 'Jane Doe',
      expiry: '12/24',
      type: 'visa'
    },
    {
      cardNumber: '• • • • 1 2 3 4',
      name: 'John Doe',
      expiry: '12/23',
      type: 'mastercard'
    },
    {
      cardNumber: '• • • • 5 6 7 8',
      name: 'Jane Doe',
      expiry: '12/24',
      type: 'visa'
    },
    {
      cardNumber: '• • • • 1 2 3 4',
      name: 'John Doe',
      expiry: '12/23',
      type: 'mastercard'
    },
    {
      cardNumber: '• • • • 5 6 7 8',
      name: 'Jane Doe',
      expiry: '12/24',
      type: 'visa'
    },
  ];

  if (cards.length === 0) {
    return (
      <EmptyCards/>
    );
  }

  return (
    <FlatList
      data={cards}
      renderItem={
        ({item}) => <CardDetails card={item}/>
      }
      keyExtractor={(item) => item.cardNumber}
    />
  );
}