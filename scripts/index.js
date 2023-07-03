"use strict";

(function() {
  function uniqSymbolsCount(string) {
    const uniqSymbols = new Set();

    for (const symbol of string) {
      uniqSymbols.add(symbol);
    }

    return uniqSymbols.size;
  }

  const str = "abracadabra";
  console.log(uniqSymbolsCount(str));

})();