import { SortArrayToASC, SortArrayToDESC } from "../utils/sortArrayInteger";

describe("sort array", () => {
  // Buatlah fungsi dengan input array integer untuk mengurutkan angka dari
  // kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript,

  it("should sort array to asc", () => {
    const arr = [6, 2, 7, 12, 4, 3];
    expect(SortArrayToASC(arr)).toStrictEqual([2, 3, 4, 6, 7, 12]);
  });

  it("should sort array to desc", () => {
    const arr = [6, 2, 7, 12, 4, 3];
    expect(SortArrayToDESC(arr)).toStrictEqual([12, 7, 6, 4, 3, 2]);
  });
});
