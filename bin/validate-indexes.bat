@echo off
set OLD=%CD%
cd "%~dp0.."
node "tools\validate-indexes.js" %*
cd "%OLD%"