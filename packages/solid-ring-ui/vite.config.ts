import {defineConfig} from "vite";
import solidPlugin from "vite-plugin-solid"

const cfg = defineConfig({
    build: {
        lib: {
            name: "my-lib",
            entry: "src/index.tsx",
            formats: ["es"],
        },
        rollupOptions: {
            external: ["solid-js"],
            input: "src/index.tsx"
        },
    },
    plugins: [
        solidPlugin()
    ]
})

export default cfg