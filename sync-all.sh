#!/bin/bash

# sync-all.sh
# Script pour synchroniser tous les composants prioritaires du DSFR
# Usage: ./sync-all.sh

set -e

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  DSFR Skill - Sync All Components${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Liste des composants prioritaires à synchroniser
PRIORITY_COMPONENTS=(
    "alert"
    "badge"
    "breadcrumb"
    "button"
    "card"
    "checkbox"
    "footer"
    "header"
    "input"
    "link"
    "modal"
    "navigation"
    "radio"
    "select"
)

total=${#PRIORITY_COMPONENTS[@]}
current=0

echo -e "${GREEN}Found $total components to synchronize${NC}"
echo ""

for component in "${PRIORITY_COMPONENTS[@]}"; do
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
