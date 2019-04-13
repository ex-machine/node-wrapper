A wrapper that allows Node 7 to be installed together with other Node versions.

## Installation

```
npm i -g @ex-machine/node7
```

## Usage

The same as `node`:
```
node7 --help
```

Can be used in NPM scripts instead of global Node installation:

```
{
  "scripts": {
    "start": "node7 index.js"
  },
  "dependencies": {
    "@ex-machine/node7": "*"
  }
}
```

