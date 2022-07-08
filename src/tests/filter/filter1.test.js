import { describe, expect, it } from "vitest";
import { majeur } from "../../Js-algo/filter/filter1";

describe('filter - exercice 1', () => {
    const ages = [6,12,8,18,35,55]

    it('retourne un tableau avec seulement les âges supérieurs ou égaux à 18', () => {
        const resultat = [18,35,55]
        expect(majeur(ages)).toEqual(resultat)
    })
})