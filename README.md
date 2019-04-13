A wrapper that allows Node 14 to be installed together with other Node versions.

## Installation

```
npm i -g @ex-machine/node14
```

## Usage

The same as `node`:
```
node14 --help
```

Can be used in NPM scripts instead of global Node installation:

```
{
  "scripts": {
    "start": "node14 index.js"
  },
  "dependencies": {
    "@ex-machine/node14": "*"
  }
}
```

