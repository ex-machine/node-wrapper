A wrapper that allows Node 18 to be installed together with other Node versions.

## Installation

```
npm i -g @ex-machine/node18
```

## Usage

The same as `node`:
```
node18 --help
```

Can be used in NPM scripts instead of global Node installation:

```
{
  "scripts": {
    "start": "node18 index.js"
  },
  "dependencies": {
    "@ex-machine/node18": "*"
  }
}
```

