import { Text, View } from "react-native";
import { Divider } from "@rneui/themed";

export function DisplayAmount({ amount }: { amount: number }) {
  return (
    <>
      <Divider style={{ width: "100%" }} color="black" />
      <View style={{ margin: 10 }}>
        <View
          style={{
            borderRadius: 50,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black", fontSize: 30 }}>{amount}</Text>
        </View>
      </View>
    </>
  );
}
