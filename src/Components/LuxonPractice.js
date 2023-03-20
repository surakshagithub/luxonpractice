import React from "react";
// import { DateTime } from "luxon";
import { Settings } from "luxon";

Settings.defaultZoneName = "UTC";

function LuxonPractice() {
  //   const dateTime = DateTime.local(2019);
  // console.log(DateTime.now().reconfigure({ `  locale: "fr" }).locale);
  const handleClick = () => {
    // let db = DateTime.now();
    // setTimeout(() => {
    //   let db1 = DateTime.now();
    //   console.log(db1.diff(db));
    // }, 1000);
    // console.log(DateTime.fromISO("2025-08-10").diffNow());
    // console.log(DateTime.local());
    // console.log(DateTime.local(2019)); //year month date hour min sec
    // console.log(DateTime.utc(2023, 3, 19, 10, 12));
    // console.log(DateTime.fromJSDate(new Date()));
    // console.log(DateTime.local().locale);
    // let isoString = "2020-01-20T12:00:00";
    // console.log(
    //   DateTime.fromISO(isoString).toLocaleString(DateTime.DATETIME_FULL)
    // );
    // .fromMillis(value), .fromSeconds(value)
    // let m = DateTime.now().ts;
    // let s = m / 1000;
    // console.log(DateTime.fromMillis(m).toLocaleString(DateTime.DATETIME_FULL));
    // console.log(DateTime.fromSeconds(s).toLocaleString(DateTime.DATETIME_FULL));
    // console.log(date);

    // let value = "15:00 march 19 2023";
    // console.log(
    //   DateTime.fromFormat(value, "HH:mm LLLL dd yyyy").toLocaleString(
    //     DateTime.DATE_HUGE
    //   )
    // );
    // const DATETIME_FULL = {
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    //   hour: "numeric",
    //   minute: "2-digit",
    //   timeZoneName: "short",
    // };
    // let value = "15:00 march 19 2023";
    // console.log(
    //   DateTime.fromFormat(value, "HH:mm LLLL dd yyyy").toLocaleString(
    //     DateTime.DATETIME_HUGE_WITH_SECONDS
    //   )
    // );
    // console.log(
    //   DateTime.fromFormat(value, "HH:mm LLLL dd yyyy").toLocaleString({
    //     month: "long",
    //     day: "numeric",
    //   })
    // );
    // DateTime.fromISO('2014-08-06T13:07:04.054').toFormat('yyyy LLL dd'); //=> '2014 Aug 06'
    let isoString = "2020-01-20T12:00:00";

    // console.log(DateTime.fromISO(isoString).toFormat("d LLLL cccc yyyy (T)"));
    // console.log(DateTime.fromISO(isoString).toSeconds());
    // console.log(DateTime.fromISO(isoString).toMillis());
  };

  //   console.log(DateTime.now().c);
  return (
    <>
      {/* current timeStamp in milliseconds
      from jan1 1970 */}
      {/* <h1>Date is :{DateTime.now().ts}</h1> */}
      {/* <h1>Value is :{DateTime.now().isLuxonDateTime}</h1> */}
      {/* <h1>{DateTime.now().toString()}</h1> */}

      {/* To get individual information  */}
      {/* <h1>{DateTime.now().year}</h1> */}
      {/* <h1>{DateTime.now().weekday}</h1> */}
      {/* <h1>{DateTime.now().zoneName}</h1> */}
      {/* <h1>{DateTime.now().daysInMonth}</h1> */}
      {/* <h1>{DateTime.local()}</h1> */}

      <button onClick={handleClick}>Get Difference</button>
    </>
  );
}

export default LuxonPractice;
