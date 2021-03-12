#!/usr/bin/env bash

rm ./src/index.ts
find ./src -name "*.ts" -execdir echo import \"{}\"';' \; > ./src/index.ts
