"use strict";

(function() {
  function uniqSymbolsCount(string) {
    return new Set([...string]).size;
  }

  const str = "abracadabra";
  console.log(uniqSymbolsCount(str));
})();

