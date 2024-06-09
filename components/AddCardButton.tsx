import {Link} from "expo-router";
import {FontAwesome6} from "@expo/vector-icons";
import {Pressable} from "react-native";

export default function AddCardButton() {
  return (
    <Link href={'card'} asChild>
      <Pressable>
        <FontAwesome6 name="plus" size={26}/>
      </Pressable>
    </Link>
  );
}