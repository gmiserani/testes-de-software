// vitest.config.unit.ts

import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        include: ["./src/test/*.test.ts"],
        coverage: {
            provider: 'istanbul', // or 'v8'
            reporter: ['text', 'json', 'html'],
        },
    },
    resolve: {
        alias: {
            auth: "/src/auth",
            quotes: "/src/quotes",
            lib: "/src/lib"
        }
    }
});