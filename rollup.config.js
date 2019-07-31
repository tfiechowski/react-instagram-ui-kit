import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import replace from "rollup-plugin-replace";
import { terser } from "rollup-plugin-terser";
import { uglify } from "rollup-plugin-uglify";

const NODE_ENV = process.env.NODE_ENV || "development";

const isProd = () => NODE_ENV === "production";

const plugins = [
  replace({
    "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
  }),
  babel({
    exclude: "node_modules/**"
  }),
  external(),
  resolve(),
  commonjs()
];

const prodPlugins = [];

if (isProd()) {
  plugins.push(...prodPlugins);
}

const outputFileExtension = isProd() ? "js" : "min.js";
const sourcemap = !isProd();

export default [
  {
    input: "./src/index.js",
    output: {
      file: `lib/index.${outputFileExtension}`,
      format: "cjs",
      sourcemap
    },
    plugins: [...plugins, ...(isProd() ? [uglify()] : [])]
  },
  {
    input: "./src/index.js",
    output: {
      file: `lib/index.esm.${outputFileExtension}`,
      format: "esm",
      sourcemap
    },
    plugins: [...plugins, ...(isProd() ? [terser()] : [])]
  }
];
