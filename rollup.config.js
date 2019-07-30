import external from "rollup-plugin-peer-deps-external";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import autoExternal from "rollup-plugin-auto-external";
import { uglify } from "rollup-plugin-uglify";
import { terser } from "rollup-plugin-terser";

const NODE_ENV = process.env.NODE_ENV || "development";

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

if (NODE_ENV === "production") {
  plugins.push(...prodPlugins);
}

export default [
  {
    input: "./src/index.js",
    output: {
      file: "lib/index.js",
      format: "cjs",
      sourcemap: true
    },
    plugins: [...plugins, uglify()]
  },
  {
    input: "./src/index.js",
    output: {
      file: "lib/index.esm.js",
      format: "esm",
      sourcemap: true
    },
    plugins: [...plugins, terser()]
  }
];
