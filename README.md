A wrapper that allows Node 19 to be installed together with other Node versions.

## Installation

```
npm i -g @ex-machine/node19
```

## Usage

The same as `node`:
```
node19 --help
```

Can be used in NPM scripts instead of global Node installation:

```
{
  "scripts": {
    "start": "node19 index.js"
  },
  "dependencies": {
    "@ex-machine/node19": "*"
  }
}
```

