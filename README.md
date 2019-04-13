A wrapper that allows Node 13 to be installed together with other Node versions.

## Installation

```
npm i -g @ex-machine/node13
```

## Usage

The same as `node`:
```
node13 --help
```

Can be used in NPM scripts instead of global Node installation:

```
{
  "scripts": {
    "start": "node13 index.js"
  },
  "dependencies": {
    "@ex-machine/node13": "*"
  }
}
```

