A wrapper that allows specific Node version to be installed together with other Node versions.

## Installation

```
npm i -g @ex-machine/node4
```

## Usage

The same as `node`:
```
node4 --help
```

Local Node can be used in NPM scripts instead of global Node installation:

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

