import LegendItem from "./LengendItem";

var legendItems = [
  new LegendItem(
    "1,000 +",
    "#f003fc",
    (cases) => cases >= 1000,
    "white"
  ),

  new LegendItem(
    "500 - 999",
    "#eb2cf5",
    (cases) => cases >= 500 && cases < 1000,
    "White"
  ),

  new LegendItem(
    "200 - 499",
    "#e74af0",
    (cases) => cases >= 200 && cases < 500
  ),

  new LegendItem(
    "100 - 199",
    "#ec77f2",
    (cases) => cases >= 100 && cases < 200
  ),

  new LegendItem(
    "0 - 100",
    "#ebd4d4",
    (cases) => cases > 0 && cases < 100
  ),

  new LegendItem("No Data", "#ffffff", (cases) => true),
];

export default legendItems;