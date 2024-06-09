import {FontAwesome6} from "@expo/vector-icons";
import {Link} from "expo-router";
import {Pressable} from "react-native";

export default function BackToHomeButton() {
  return (
    <Link href={'/'} asChild>
      <Pressable>
        <FontAwesome6 name="chevron-left" size={26}/>
      </Pressable>
    </Link>
  );
}