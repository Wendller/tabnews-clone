#!/usr/bin/env sh
set -e

if ! npm run lint:prettier:check; then
  echo "🔴 Prettier check failed" 
  echo "▶️  Run 'npm run lint:prettier:fix' to fix formatting issues."
  exit 1
fi

if ! npm run lint:eslint:check; then
  echo "🔴 Prettier check failed" 
  exit 1
fi

if ! npm test; then
  echo "🔴 Local tests failed" 
  exit 1
fi

echo "✅ All quality checks passed"