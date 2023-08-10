// release.config.js
module.exports = {
  branches: ["main"],
  preset: "conventionalcommits",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/npm",
      {
        npmPublish: true,
        tarballDir: ".",
        pkgRoot: "./",
        publishConfig: {
          access: "public",
        },
      },
    ],
    "@semantic-release/github",
  ],
};
