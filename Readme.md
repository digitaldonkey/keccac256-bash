runKeccak256
============

This tool let you encode Ethereum keccac-256 hashed in the command line. This script should work everywhere.

For high performance the C-implementation from http://keccak.noekeon.org might be more suitable. See below for instructions.

## Install 
Requires node & npm.

```
git clone https://github.com/digitaldonkey/keccac256-bash.git
npm install 
```

## Usage
E.g. hash of empty string

```
node runKeccak256.js ''
```
Return

`c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470`

## Setting up keccac-256
The instructions on the website of KeccakCodePackage are not too intuitive. 
More on: https://github.com/gvanas/KeccakCodePackage

```
git clone https://github.com/gvanas/KeccakCodePackage.git
cd KeccakCodePackage
```
Run
```
bin/generic64/KeccakSum --ethereum --string ""
```

**Returns**
`c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470  ""`

Mind the fiffering return values! Just use the forst 64 chars of the return value to keep consistent with above node solution.

# Comparison
```
 time node runKeccak256.js ''
c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470

real 0m0.123s
user 0m0.099s
sys  0m0.022s
```

```
c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470  ""

real 0m0.004s
user 0m0.001s
sys  0m0.001s
```
