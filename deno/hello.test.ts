import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { hello } from './hello.ts';

Deno.test('hello', () => {
    assertEquals('Hello, World!', hello());
});
