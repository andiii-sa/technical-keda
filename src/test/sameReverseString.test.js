import { SameReverseString } from "../utils/sameReverseString";

describe("same reverse string test", () => {
  // Buatlah fungsi dengan input string jika string tersebut dibalik
  // dan tetap sama dengan string yang diinputkan maka return true jika
  // tidak return false

  it("should same reverse string", () => {
    expect(SameReverseString("kasur rusak")).toBe(true);
  });
});
