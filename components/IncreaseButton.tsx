import { Image, Pressable, StyleSheet, View } from "react-native";
import * as SQLite from "expo-sqlite";
import {
  SQLiteProvider,
  useSQLiteContext,
  type SQLiteDatabase,
} from "expo-sqlite";
import { viceAndAmount } from "@/app/types";
import { Text } from "react-native";
import { useState } from "react";
import { getCount, persistUse } from "./Repository";

export function IncreaseButton({
  viceId,
  amount,
  callbackOnUpdate,
}: {
  viceId: number;
  amount: number;
  callbackOnUpdate: (amount: number) => void;
}) {
  const style = StyleSheet.create({
    icon: {
      height: 35,
      width: 35,
    },
  });

  return (
    <View style={{ backgroundColor: "blue", borderRadius: 50 }}>
      <Pressable
        onPressOut={() => {
          persistUse({ viceId, amount });
          callbackOnUpdate(amount);
        }}
      >
        <Image
          style={style.icon}
          source={{
            uri: "https://img.icons8.com/?size=100&id=3220&format=png&color=ffffff",
          }}
        />
      </Pressable>
    </View>
  );
}
