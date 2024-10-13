# Vermeer (for Svelte 4)

## Developing

Install dependencies with `pnpm install` (or `npm install` or `yarn`), start a development storybook server:

```bash
pnpm storybook
```

Everything inside `src/lib` is part of the library. Every story is inside `src/stories`.

## Building

To build your library (output should be inside `dist`):

```bash
pnpm package
```

To create a production version of the storybook app (output should be inside `storybook-static`):

```bash
pnpm build-storybook
```

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
```
