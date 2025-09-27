#!/usr/bin/env sh

FILES=$(git diff --cached --name-only)

PATTERNS='(AIza[0-9A-Za-z\-_]{35})|(sk-[0-9a-zA-Z]{32,})|(ghp_[0-9A-Za-z]{36})'

if grep -q -E -r --color=always "$PATTERNS" $FILES; then
    echo "🔴 Commit canceled; possible secrets detected in:"
    grep -E -r --color=always "$PATTERNS" $FILES
    echo "👉 Remove secret before committing."
    exit 1
fi

exit 0