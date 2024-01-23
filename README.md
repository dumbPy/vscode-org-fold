# vscode-org-fold
A vscode extension that provides code folding for org mode for any language that needs it (on configuring)

This extension separates the fold region provider code from the original [vscode-org-mode](https://github.com/vscode-org-mode/vscode-org-mode) so that you can use it for any language that needs org mode code folding, eg. [beancount](https://github.com/beancount/beancount).

# Settings
In order to use org style folding for any language, you can add the below settings
```json
    {
        "vscode-org-fold.languagesToFold": [
            "beancount"
        ]
    }
```
