import { LoopBash } from "../utils/loopBash";

describe("loop test", () => {
  // 1. Buatlah fungsi dengan parameter berapa banyak angka
  // yg akan ditampilkan secara looping, dimana jika angka tersebut
  // habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash" dan
  // jika habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut,
  // cetak menggunakan console log atau sejenisnya.

  it("should loop n", () => {
    LoopBash(16);
  });
});
