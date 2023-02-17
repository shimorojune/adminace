#!/bin/bash
# Used to stop vercel from triggering builds (and subsequently using up metered resources) for every branch 

if [[ "$VERCEL_GIT_COMMIT_REF" == "staging" || "$VERCEL_GIT_COMMIT_REF" == "production"  ]] ; then
  # Proceed with the build
    echo "✅ - Build can proceed"
  exit 1;

else
  # Don't build
  echo "🛑 - Build cancelled since this branch does not require it."
  exit 0;
fi