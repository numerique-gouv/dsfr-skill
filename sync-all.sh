#!/bin/bash

# sync-all.sh
# Script pour synchroniser tous les composants listés dans components.json
# Usage: ./sync-all.sh

set -e

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  DSFR Skill - Sync All Components${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Vérifier que jq est installé
if ! command -v jq &> /dev/null; then
    echo -e "${RED}Error: jq is not installed. Please install it first.${NC}"
    echo "  brew install jq"
    exit 1
fi

# Lire la liste des composants prioritaires
components=$(jq -r '.priority_components[]' components.json)

total=$(echo "$components" | wc -l | tr -d ' ')
current=0

echo -e "${GREEN}Found $total components to synchronize${NC}"
echo ""

for component in $components; do
    ((current++))
    echo -e "${BLUE}[$current/$total] Synchronizing: $component${NC}"
    echo "----------------------------------------"

    if ./sync-component.sh "$component"; then
        echo -e "${GREEN}✅ $component synchronized successfully${NC}"
    else
        echo -e "${YELLOW}⚠️  $component synchronization had issues${NC}"
    fi

    echo ""
done

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  All components synchronized!${NC}"
echo -e "${GREEN}========================================${NC}"
