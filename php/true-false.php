<?php

echo "strict off true \n";
var_export(true == true); echo "\n";
var_export(false == true); echo "\n";
var_export(null == true); echo "\n";
var_export('' == true); echo "\n";
var_export(0 == true); echo "\n";
var_export('0' == true); echo "\n";
var_export(1 == true); echo "\n";
var_export('1' == true); echo "\n";
echo "\n";

echo "strict off false \n";
var_export(false == false); echo "\n";
var_export(true == false); echo "\n";
var_export(null == false); echo "\n";
var_export('' == false); echo "\n";
var_export(0 == false); echo "\n";
var_export('0' == false); echo "\n";
var_export(1 == false); echo "\n";
var_export('1' == false); echo "\n";
echo "\n";

echo "strict on true \n";
var_export(true === true); echo "\n";
var_export(false === true); echo "\n";
var_export(null === true); echo "\n";
var_export('' === true); echo "\n";
var_export(0 === true); echo "\n";
var_export('0' === true); echo "\n";
var_export(1 === true); echo "\n";
var_export('1' === true); echo "\n";
echo "\n";

echo "strict on false \n";
var_export(false === false); echo "\n";
var_export(true === false); echo "\n";
var_export(null === false); echo "\n";
var_export('' === false); echo "\n";
var_export(0 === false); echo "\n";
var_export('0' === false); echo "\n";
var_export(1 === false); echo "\n";
var_export('1' === false); echo "\n";
echo "\n";
