#!/usr/bin/env bash

rm ./src/index.ts
find ./src -name "*.ts" -print | xargs basename -s .ts | xargs -I % echo "export * from \"./%\";" > ./src/index.ts
