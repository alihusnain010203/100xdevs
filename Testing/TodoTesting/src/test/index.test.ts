import {describe,expect,it }from "@jest/globals"
import { sum } from ".."

describe("sum", () => {
    it("it should return the sum of positive numbers", () => {
        expect(sum(1, 2)).toBe(3)
    }),
    it("it should return the sum of negative numbers", ()=>{
        expect(sum(-1, -2)).toBe(-3)
    })

})