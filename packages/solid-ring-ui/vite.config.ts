import {defineConfig} from "vite";
import solidPlugin from "vite-plugin-solid"
import dts from "vite-plugin-dts"

const cfg = defineConfig({
    build: {
        lib: {
            name: "my-lib",
            entry: "src/index.tsx",
            formats: ["es"],
        },
        target: "esnext",
        rollupOptions: {
            external: ["solid-js"],
            input: "src/index.tsx",
            output: {
                format: "esm",
                dir: "dist",
            }
        },
    },
    plugins: [
        dts({}),
        solidPlugin()
    ]
})

export default cfg