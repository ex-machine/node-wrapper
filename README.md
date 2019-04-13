A wrapper that allows Node 11 to be installed together with other Node versions.

## Installation

```
npm i -g @ex-machine/node11
```

## Usage

The same as `node`:
```
node11 --help
```

Can be used in NPM scripts instead of global Node installation:

```
{
  "scripts": {
    "start": "node11 index.js"
  },
  "dependencies": {
    "@ex-machine/node11": "*"
  }
}
```

