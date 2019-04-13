A wrapper that allows Node 10 to be installed together with other Node versions.

## Installation

```
npm i -g @ex-machine/node10
```

## Usage

The same as `node`:
```
node10 --help
```

Can be used in NPM scripts instead of global Node installation:

```
{
  "scripts": {
    "start": "node10 index.js"
  },
  "dependencies": {
    "@ex-machine/node10": "*"
  }
}
```

