import { describe, expect, it } from "@jest/globals"
import { app } from ".."
import request from "supertest";

describe("Test the Sum endpoint", () => {
    it("should return 3 when passed 1 and 2", async () => {
        const response = await request(app)
            .post("/sum")
            .send({
                a: 1,
                b: 2
            });
        expect(response.body.answer).toBe(3);
        //  statusCode
        expect(response.statusCode).toBe(200);



    });
});