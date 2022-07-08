import { describe, expect, it } from "vitest";
import { listeEleves, noteSuperieureADix } from "../../Js-algo/filter/filter3";

describe('filter - exercice 3', () => {
    
    it('retourne un tableau qui contient que les élèves avec une note supérieure à 10', () => {
        const resultat = [
            {
                prenom: 'Claire',
                note: 12
            },
            {
                prenom: 'Patrick',
                note: 15,
            },
            {
                prenom: 'Lea',
                note: 18
            },
        ]
        expect(noteSuperieureADix(listeEleves)).toEqual(resultat)
    })
})