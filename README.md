A wrapper that allows Node 17 to be installed together with other Node versions.

## Installation

```
npm i -g @ex-machine/node17
```

## Usage

The same as `node`:
```
node17 --help
```

Can be used in NPM scripts instead of global Node installation:

```
{
  "scripts": {
    "start": "node17 index.js"
  },
  "dependencies": {
    "@ex-machine/node17": "*"
  }
}
```

