A wrapper that allows Node 8 to be installed together with other Node versions.

## Installation

```
npm i -g @ex-machine/node8
```

## Usage

The same as `node`:
```
node8 --help
```

Can be used in NPM scripts instead of global Node installation:

```
{
  "scripts": {
    "start": "node8 index.js"
  },
  "dependencies": {
    "@ex-machine/node8": "*"
  }
}
```

