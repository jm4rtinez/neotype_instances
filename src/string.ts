/*
 * Copyright 2022 Josh Martinez
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Augmentations for the `string` type.
 *
 * ## Importing this module
 *
 * This module's augmentations can be applied by using the following import:
 *
 * ```ts
 * import "@neotype/instances/string.js";
 * ```
 *
 * ## Comparing `string`
 *
 * `string` implements `Eq` and `Ord`.
 *
 * - Two strings are equal if they are strictly equal using `===`.
 * - Strings are ordered lexicographically.
 *
 * ## `string` as a semigroup
 *
 * `string` implements `Semigroup`. Strings are combined using concatenation.
 *
 * @module
 */

import { Semigroup } from "@neotype/prelude/cmb.js";
import { Eq, Ord, Ordering } from "@neotype/prelude/cmp.js";

declare global {
    interface String {
        [Eq.eq](that: string): boolean;

        [Ord.cmp](that: string): Ordering;

        [Semigroup.cmb](that: string): string;
    }
}

String.prototype[Eq.eq] = function (that: string): boolean {
    return this === that;
};

String.prototype[Ord.cmp] = function (that: string): Ordering {
    if (this < that) {
        return Ordering.less;
    }
    if (this > that) {
        return Ordering.greater;
    }
    return Ordering.equal;
};

String.prototype[Semigroup.cmb] = function (that: string): string {
    return this + that;
};