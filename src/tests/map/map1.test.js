import { describe, it, expect } from 'vitest'
import { afficheUnElement, fruits } from '../../Js-algo/map/map1'

describe('map - exercice 1', () => {
    

    it('affiche fraise', () => {
        expect(afficheUnElement(fruits)).toContain('fraise')
    })
})