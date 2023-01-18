import { assertEquals } from "@denostd/testing/asserts.ts";
import { add } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

