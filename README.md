A wrapper that allows Node 20 to be installed together with other Node versions.

## Installation

```
npm i -g @ex-machine/node20
```

## Usage

The same as `node`:
```
node20 --help
```

Can be used in NPM scripts instead of global Node installation:

```
{
  "scripts": {
    "start": "node20 index.js"
  },
  "dependencies": {
    "@ex-machine/node20": "*"
  }
}
```

