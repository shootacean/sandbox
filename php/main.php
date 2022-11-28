<?php

function one() {
    echo "one\n";
    return true;
}

function two() {
    echo "two\n";
    return false;
}

if (one() && two()) {
    echo "three\n";
}

if (two() && one()) {
    echo "three\n";
}

