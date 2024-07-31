#!/bin/bash
if command -v deno >/dev/null 2>&1; then
    alias tricera='deno run https://raw.githubusercontent.com/bricefriha/Tricera/main/cli.ts'
else
    echo "Deno is not installed"
fi


