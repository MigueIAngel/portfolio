#!/usr/bin/env bash
# Builds both CVs with pdflatex and copies them to public/cv/ for download.
set -euo pipefail
cd "$(dirname "$0")"
for lang in es en; do
  pdflatex -interaction=nonstopmode -halt-on-error "cv-$lang.tex" >/dev/null
  cp "cv-$lang.pdf" "../public/cv/MiguelAngelAltamar-CV-$(echo "$lang" | tr a-z A-Z).pdf"
done
rm -f ./*.aux ./*.log ./*.out ./*.pdf
ls -la ../public/cv
