import { describe, it, expect } from 'vitest'
import { aLaMoyenne, listeEleves } from '../../Js-algo/map/map3'

describe('map - exercice 3', () => {

    it('affiche un tableau  ', () => {
        const retour = [
            {
                prenom: 'Claire',
                note: 12,
                moyenneOuPlus: true,
            },
            {
                prenom: 'Patrick',
                note: 15,
                moyenneOuPlus: true,
            },
            {
                prenom: 'Lea',
                note: 18,
                moyenneOuPlus: true,
            },
            {
                prenom: 'Pierre',
                note: 8,
                moyenneOuPlus: false,

            },
            {
                prenom: 'Mireille',
                note: 5,
                moyenneOuPlus: false,
            }
        ]

        expect(aLaMoyenne(listeEleves)).toEqual(retour)
    })
})