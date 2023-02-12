import { describe, it, expect } from "vitest"

const apiUrl = import.meta.env.VITE_API_URL

describe("Strapi api", () => {
    async function dataTest(res) {
        const resJson = await res.json()

        expect(res.status).toBe(200)
        expect(resJson).toBeTypeOf("object")
        expect(resJson.data.length).toBeGreaterThanOrEqual(1)
    }

    it("Get cv", async () => {
        await fetch(`${apiUrl}/links?filters[id][$eq]=3`)
            .then(res => dataTest(res))
    })

    it("Get all projects", async () => {
        await fetch(`${apiUrl}/projects?populate=%2A&sort=id:desc&filters[ShowIt][$eq]=true`)
            .then(res => dataTest(res))
    })

    it("Get one project", async () => {
        await fetch(`${apiUrl}/projects?populate=%2A&sort=id:desc&filters[ShowIt][$eq]=true`)
            .then(res => res.json())
            .then(async res => {
                await fetch(`${apiUrl}/projects?populate=%2A&filters[Slug][$eq]=${res.data[0].attributes.Slug}`)
                    .then(res => dataTest(res))
            })
    })
})