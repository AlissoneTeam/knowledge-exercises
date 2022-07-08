import { describe, it, expect } from 'vitest'
import { afficheUnElement, fruits } from '../../Js-algo/array/array2'

describe('array - exercice 2', () => {
    

    it('affiche fraise', () => {
        expect(afficheUnElement(fruits)).toContain('fraise')
    })
})