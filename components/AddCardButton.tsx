import {Link} from "expo-router";
import {FontAwesome6} from "@expo/vector-icons";

export default function AddCardButton() {
  return (
    <Link href={'card'}>
      <FontAwesome6 name="plus" size={24}/>
    </Link>
  );
}