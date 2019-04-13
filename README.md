A wrapper that allows Node 4 to be installed together with other Node versions.

## Installation

```
npm i -g @ex-machine/node4
```

## Usage

The same as `node`:
```
node4 --help
```

Can be used in NPM scripts instead of global Node installation:

```
{
  "scripts": {
    "start": "node4 index.js"
  },
  "dependencies": {
    "@ex-machine/node4": "*"
  }
}
```

