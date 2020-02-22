let string = "abc";

import { sha256, sha224 } from 'js-sha256';

function generateHash(input: string) {
    console.log(sha256(input));
}

generateHash(string);