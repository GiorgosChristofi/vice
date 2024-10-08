import { useState } from "react";
import { IncreaseButton } from "./IncreaseButton";
import { DisplayAmount } from "./DisplayAmount";
import { getCount } from "./Repository";
import {
  getOneMonthAgoDateTime,
  getOneWeekAgoDateTime,
  getYesterdayDateTime,
} from "./DateHandler";
import { Image, Text, View, StyleSheet } from "react-native";
import { UndoButton } from "./UndoButton";
import { LinearGradient } from "expo-linear-gradient";

export function Vice({ viceid }: { viceid: number }) {
  const [yesterdayCount, setYesterdayCount] = useState(
    getCount({ viceId: viceid, dateFrom: getYesterdayDateTime() })
  );
  const [lastWeekCount, setLastWeekCount] = useState(
    getCount({ viceId: viceid, dateFrom: getOneWeekAgoDateTime() })
  );
  const [lastMonthCount, setLastMonthCount] = useState(
    getCount({ viceId: viceid, dateFrom: getOneMonthAgoDateTime() })
  );

  function updateAllCounts() {
    setYesterdayCount(
      getCount({ viceId: viceid, dateFrom: getYesterdayDateTime() })
    );
    setLastWeekCount(
      getCount({ viceId: viceid, dateFrom: getOneWeekAgoDateTime() })
    );
    setLastMonthCount(
      getCount({ viceId: viceid, dateFrom: getOneMonthAgoDateTime() })
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "orange",
    },
    background: {
      ...StyleSheet.absoluteFillObject, // Ensures the gradient covers the entire screen
    },
    button: {
      padding: 15,
      alignItems: "center",
      borderRadius: 5,
    },
    text: {
      backgroundColor: "transparent",
      fontSize: 15,
      color: "#fff",
    },
  });

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100%",
        paddingVertical: "10%",
      }}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={["#FFCDCD", "#FF9B44"]}
        style={styles.background}
      />

      <Text style={{ fontSize: 36 }}>Cigarettes</Text>
      <Image
        source={require("..\\assets\\images\\nicotine.png")}
        style={{ height: "25%", width: "50%" }}
      />
      <DisplayAmount
        amount={yesterdayCount}
        src="https://img.icons8.com/ios/100/calendar-1.png"
      />
      <DisplayAmount
        amount={lastWeekCount}
        src="https://img.icons8.com/ios/100/calendar-7.png"
      />
      <DisplayAmount
        amount={lastMonthCount}
        src="https://img.icons8.com/ios/100/calendar-31.png"
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignContent: "space-evenly",
          width: "100%",
        }}
      >
        <UndoButton viceId={viceid} callbackOnUpdate={updateAllCounts} />
        <IncreaseButton
          viceId={viceid}
          amount={1}
          callbackOnUpdate={updateAllCounts}
        />
        {/* TODO update all amounts on update */}
      </View>
    </View>
  );
}
