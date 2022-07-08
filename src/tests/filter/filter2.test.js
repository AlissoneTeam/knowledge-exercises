import { describe, expect, it } from "vitest";
import { listeCourse, majeur, mot4Lettres } from "../../Js-algo/filter/filter2";

describe('filter - exercice 2', () => {
    
    it('retourne un tableau qui contient que les mots de 4 lettres', () => {
        const resultat = ['lait', 'pain']
        expect(mot4Lettres(listeCourse)).toEqual(resultat)
    })
})