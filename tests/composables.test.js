import { describe, it, expect } from "vitest"
import { useGetAge } from "../composables/getAge"

describe("Composables", async () => {
    it("useGetAge", async () => {
        const age = useGetAge()

        expect(age).toBeTypeOf("number")
    })
})