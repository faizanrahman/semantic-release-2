module.exports = {
    debug: true,
    ci: true,
    branch: "main",
    repositoryUrl: "https://github.com/faizanrahman/semantic-release-2.git",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        ["@semantic-release/changelog",{ "changelogFile": 'CHANGELOG.md' }],
        ["semantic-release-plugin-update-version-in-files", {
            "files": [
              'version.txt'
            ],
            "placeholder": /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/
          }
        ],
        [
            "@semantic-release/git",
            {
                "assets": ['CHANGELOG.md', 'package.json', 'version.txt']
            }
        ]
    ],
    dryRun: false,
    tagFormat: '${version}'
}