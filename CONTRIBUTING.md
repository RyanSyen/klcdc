# Contributing

Thanks for helping improve the KLCDC website.

## Getting Set Up

Follow the [Getting Started](./README.md#getting-started) steps in the README to get the project running locally before making changes.

## Workflow

1. Create a branch off `main`:

   ```bash
   git checkout -b feat/short-description
   ```

2. Make your changes, keeping them focused on a single concern.
3. Run lint before committing:

   ```bash
   npm run lint
   ```

4. Commit using [Conventional Commits](https://www.conventionalcommits.org/):

   ```
   feat: add English corner schedule section
   fix: correct broken link in footer
   chore: bump dependency versions
   docs: update setup instructions
   refactor: simplify carousel component
   ```

5. Push your branch and open a pull request against `main`.

## Pull Requests

- Give the PR a clear title and description of what changed and why.
- Link any related issues.
- Include screenshots for UI changes.
- Make sure `npm run build` succeeds and `npm run lint` passes before requesting review.

## Code Style

- Match the existing patterns in the file you're editing (component structure, Tailwind usage, naming).
- Reuse existing UI primitives in `src/components/ui` and shared components before adding new ones.
- Keep components focused; avoid unrelated refactors in the same PR as a feature or fix.
- No commented-out code — delete it instead.

## Reporting Issues

Open a GitHub issue with steps to reproduce, expected behavior, and actual behavior. For UI issues, include a screenshot and the page/route affected.
