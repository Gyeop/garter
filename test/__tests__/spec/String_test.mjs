// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Zora from "@dusty-phillips/rescript-zora/src/Zora.mjs";
import * as Zora$1 from "zora";

function testEqual(t, name, lhs, rhs) {
  t.test(name, (function (t) {
          t.equal(lhs, rhs, name);
          return Zora.done(undefined);
        }));
  
}

Zora$1.test("pad", (function (t) {
        testEqual(t, "padEnd", "foo  ", "foo".padEnd(5));
        testEqual(t, "padEndWith", "foo..", "foo".padEnd(5, "."));
        testEqual(t, "padStart", "  foo", "foo".padStart(5));
        return testEqual(t, "padStartWith", "..foo", "foo".padStart(5, "."));
      }));

Zora$1.test("trim", (function (t) {
        testEqual(t, "trimEnd", "  foo", "  foo  ".trimEnd());
        return testEqual(t, "trimStart", "foo  ", "  foo  ".trimStart());
      }));

export {
  testEqual ,
  
}
/*  Not a pure module */
