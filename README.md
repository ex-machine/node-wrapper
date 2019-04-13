A wrapper that allows Node 6 to be installed together with other Node versions.

## Installation

```
npm i -g @ex-machine/node6
```

## Usage

The same as `node`:
```
node6 --help
```

Can be used in NPM scripts instead of global Node installation:

```
{
  "scripts": {
    "start": "node6 index.js"
  },
  "dependencies": {
    "@ex-machine/node6": "*"
  }
}
```

