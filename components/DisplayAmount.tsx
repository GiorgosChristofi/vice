import { Text, View, Image } from "react-native";
import { Divider } from "@rneui/themed";

export function DisplayAmount({
  amount,
  src,
}: {
  amount: number;
  src: string;
}) {
  return (
    <>
      <Divider style={{ width: "100%" }} color="black" />
      <View style={{ margin: 10 }}>
        <View
          style={{
            borderRadius: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: src }}
            style={{ width: 25, height: 25, position: "absolute", left: -50 }}
          />
          <Text
            style={{
              color: "black",
              fontSize: 30,
              width: 100,
              textAlign: "center",
            }}
          >
            {amount}
          </Text>
        </View>
      </View>
    </>
  );
}
