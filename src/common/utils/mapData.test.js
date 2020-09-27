import { mapToChartData } from "./mapData";
describe("Map API to data", () => {
  it("should return x and y array", () => {
    expect(mapToChartData(["1,2,3,4,5", "6,7,8,9,10"])).toEqual([
      { x: new Date(parseFloat(1)), y: [2, 3, 4, 5] },
      { x: new Date(parseFloat(6)), y: [7, 8, 9, 10] },
    ]);
  });
});
