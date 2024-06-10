import React from "react";
import EmptyCards from "@/components/HomeScreen/EmptyCards";
import CardDetails from "@/components/HomeScreen/CardDetails";
import {FlatList} from "react-native";
import OmiseStore from "@/store/omise-store";

type Card = {
  cardNumber: string;
  name: string;
  expiry: string;
  type: string;
};

export default function HomeScreen() {

  const cards = OmiseStore.tokens;

  if (cards.length === 0) {
    return (
      <EmptyCards/>
    );
  }

  return (
    <FlatList
      data={cards}
      renderItem={
        ({item}) => <CardDetails card={item.card}/>
      }
      keyExtractor={(item) => item.id}
    />
  );
}