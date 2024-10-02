import { useState } from "react";
import { IncreaseButton } from "./IncreaseButton";
import { DisplayAmount } from "./DisplayAmount";
import { getCount } from "./Repository";
import {
  getOneMonthAgoDateTime,
  getOneWeekAgoDateTime,
  getYesterdayDateTime,
} from "./DateHandler";
import { Image } from "@rneui/themed";

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

  return (
    <>
      <Image src={require("../assets/images/nicotine.png")}></Image>
      <DisplayAmount amount={yesterdayCount} />
      <DisplayAmount amount={lastWeekCount} />
      <DisplayAmount amount={lastMonthCount} />

      <IncreaseButton
        viceId={viceid}
        amount={1}
        callbackOnUpdate={(amount: number) => {
          setYesterdayCount((prevCount) => prevCount + amount);
          setLastWeekCount((prevCount) => prevCount + amount);
          setLastMonthCount((prevCount) => prevCount + amount);
        }}
      />
    </>
  );
}
