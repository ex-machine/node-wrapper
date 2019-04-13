A wrapper that allows Node 15 to be installed together with other Node versions.

## Installation

```
npm i -g @ex-machine/node15
```

## Usage

The same as `node`:
```
node15 --help
```

Can be used in NPM scripts instead of global Node installation:

```
{
  "scripts": {
    "start": "node15 index.js"
  },
  "dependencies": {
    "@ex-machine/node15": "*"
  }
}
```

