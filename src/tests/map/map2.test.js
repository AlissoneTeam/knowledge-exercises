import { describe, it, expect } from 'vitest'
import { afficheChaqueElement, fruits } from '../../Js-algo/map/map2'

describe('map - exercice 2', () => {

    it('affiche un tableau avec une phrase et un fuit ', () => {
        const retour = [
            "J'adore la pomme",
            "J'adore la banane",
            "J'adore la fraise",
            "J'adore la cerise"
        ]

        expect(afficheChaqueElement(fruits)).toEqual(retour)
    })
})