import { eq } from "@neotype/prelude/cmp.js";
import { expect } from "chai";
import * as fc from "fast-check";
import "../src/symbol.js";
import { expectLawfulEq } from "./util.js";

describe("symbol.js", () => {
    describe("Symbol", () => {
        describe("#[Eq.eq]", () => {
            it("compares a symbol as equal to itself", () => {
                const sym = Symbol();
                expect(eq(sym, sym)).to.be.true;
            });

            it("compares two different symbols as inequal", () => {
                expect(eq(Symbol(), Symbol())).to.be.false;
            });

            it("implements a lawful equivalence relation", () => {
                function arbSymbol(): fc.Arbitrary<symbol> {
                    return fc.oneof(
                        fc.constant(Symbol()),
                        fc.constant(Symbol()),
                        fc.constant(Symbol()),
                    );
                }

                expectLawfulEq(arbSymbol());
            });
        });
    });
});
