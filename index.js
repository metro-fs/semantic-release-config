module.exports = {
  branches: ["main"],
  preset: "conventionalcommits",
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/release-notes-generator",
      {
        presetConfig: {
          types: [
            {
              type: "feat",
              section: "Features",
            },
            {
              type: "fix",
              section: "Bug Fixes",
            },
            {
              type: "chore",
              section: "Chores",
            },
            {
              type: "docs",
              section: "Docs",
            },
            {
              type: "style",
              section: "Code style improvements",
            },
            {
              type: "refactor",
              section: "Refactors",
            },
            {
              type: "perf",
              section: "Performance improvements",
            },
            {
              type: "test",
              section: "Tests",
            },
            {
              type: "ci",
              section: "CI/CD improvements",
            },
            {
              type: "build",
              section: "Build process improvements",
            },
            {
              type: "revert",
              section: "Reverts",
            },
          ],
        },
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json", "package-lock.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/gitlab",
  ],
};
