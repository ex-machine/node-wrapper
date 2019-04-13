A wrapper that allows Node 16 to be installed together with other Node versions.

## Installation

```
npm i -g @ex-machine/node16
```

## Usage

The same as `node`:
```
node16 --help
```

Can be used in NPM scripts instead of global Node installation:

```
{
  "scripts": {
    "start": "node16 index.js"
  },
  "dependencies": {
    "@ex-machine/node16": "*"
  }
}
```

