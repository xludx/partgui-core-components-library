#!/usr/bin/env bash
ng build
ng-packagr -p ng-package.json
cd dist
npm pack

