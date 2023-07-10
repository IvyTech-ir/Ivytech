#!/bin/sh

rm -rf build && npm run ttsc
status=$?
if [ $status -eq 0 ]
then
    cp package.json ./build
    cp README.md ./build
    echo "npm run ttsc command was successful"
    exit 0
else
    echo "npm run ttsc failed"
    exit 1
fi
