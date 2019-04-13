A wrapper that allows Node 12 to be installed together with other Node versions.

## Installation

```
npm i -g @ex-machine/node12
```

## Usage

The same as `node`:
```
node12 --help
```

Can be used in NPM scripts instead of global Node installation:

```
{
  "scripts": {
    "start": "node12 index.js"
  },
  "dependencies": {
    "@ex-machine/node12": "*"
  }
}
```

