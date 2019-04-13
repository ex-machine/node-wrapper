A wrapper that allows Node 9 to be installed together with other Node versions.

## Installation

```
npm i -g @ex-machine/node9
```

## Usage

The same as `node`:
```
node9 --help
```

Can be used in NPM scripts instead of global Node installation:

```
{
  "scripts": {
    "start": "node9 index.js"
  },
  "dependencies": {
    "@ex-machine/node9": "*"
  }
}
```

