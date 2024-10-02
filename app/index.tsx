import { Text, View } from "react-native";
import { IncreaseButton } from "../components/IncreaseButton";
import { Platform } from "react-native";
import * as SQLite from "expo-sqlite";
import { DisplayAmount } from "@/components/DisplayAmount";
import { getCount, openDatabase } from "@/components/Repository";
import { Vice } from "@/components/Vice";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SQLite.SQLiteProvider databaseName="db.db" onInit={openDatabase}>
        <Vice viceid={1}></Vice>
      </SQLite.SQLiteProvider>
    </View>
  );
}
