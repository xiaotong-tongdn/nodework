# nodework

Small TypeScript CLI: CSV to JSON converter

## Usage

```bash
npx . convert data.csv -d ';'
# or after npm link: cliparse convert data.csv
```

## Highlights

- npm link friendly
- commander-based subcommands
- Ships as an ESM binary
- Strict tsconfig, no any

## Install

```bash
npm install
npm run build
```

## Project structure

```text
├── .github/
│   └── workflows/
│       └── ci.yml
├── docs/
│   ├── configuration.md
│   ├── development.md
│   └── roadmap.md
├── src/
│   └── index.ts
├── .gitignore
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── package.json
└── tsconfig.json
```
