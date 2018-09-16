#!/bin/bash
#dist folder having production build
cd /www/src/
sudo npm install
ng build --prod
