import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { UsernameDisplay } from "../components/UsernameDisplay";


describe("UsernameDisplay", () => {
    it("Should render the Username", () => {
        render(<UsernameDisplay />)
    })
})




