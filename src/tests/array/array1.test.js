import { describe, expect, it } from "vitest";
import { fleurs, longueurTableau } from "../../Js-algo/array/array1";

describe('array - exercice 1', () => {
    it('Retourne la longueur du tableau', () => {

        expect(longueurTableau(fleurs)).toEqual(3)
    })
})