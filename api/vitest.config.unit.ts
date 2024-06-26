// vitest.config.unit.ts

import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        include: ["./src/test/*.test.ts"],
        coverage: {
            include: ["./src/services/*.ts"],
            // exclude: ["./src/test/*.ts"],
            provider: 'v8', // or 'v8'
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