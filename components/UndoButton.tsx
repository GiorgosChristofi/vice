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
import { getCount, removeLastAddition } from "./Repository";

export function UndoButton({
  viceId,
  callbackOnUpdate,
}: {
  viceId: number;
  callbackOnUpdate: () => void;
}) {
  const style = StyleSheet.create({
    icon: {
      height: 35,
      width: 35,
      margin: 10,
    },
  });

  return (
    <View style={{ backgroundColor: "red", borderRadius: 50 }}>
      <Pressable
        onPressOut={() => {
          removeLastAddition({ viceId });
          callbackOnUpdate();
        }}
      >
        <Image
          style={style.icon}
          source={{
            uri: "https://img.icons8.com/?size=100&id=3059&format=png&color=ffffff",
          }}
        />
      </Pressable>
    </View>
  );
}
