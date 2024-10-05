import { useState } from "react";
import { IncreaseButton } from "./IncreaseButton";
import { DisplayAmount } from "./DisplayAmount";
import { getCount } from "./Repository";
import {
  getOneMonthAgoDateTime,
  getOneWeekAgoDateTime,
  getYesterdayDateTime,
} from "./DateHandler";
import { Image, Text, View } from "react-native";
import { UndoButton } from "./UndoButton";

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

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "75%",
      }}
    >
      <Text style={{ fontSize: 36 }}>Cigarettes</Text>
      <Image
        source={require("..\\assets\\images\\nicotine.png")}
        style={{ height: "25%", width: "50%" }}
      />
      <DisplayAmount amount={yesterdayCount} />
      <DisplayAmount amount={lastWeekCount} />
      <DisplayAmount amount={lastMonthCount} />
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
