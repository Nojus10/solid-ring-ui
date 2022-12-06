import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";


const extensions = [".tsx", ".ts", ".js", ".jsx"]

/** @type {import("rollup").RollupOptions}*/
const rollupConfig = {
    input: "src/index.tsx",
    external: ["solid-js"],
    output: {
        dir: "dist",
        format:"esm"
    },
    plugins: [
        nodeResolve({extensions}),
        babel({
            babelHelpers: "bundled",
            extensions,
            presets: [
                "@babel/preset-typescript",
                "solid"
            ]
        })
    ]
}


export default rollupConfig