// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { OrgFoldingAndOutlineProvider } from './org-folding-and-outline-provider';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-org-fold" is now active!');

	const provider = new OrgFoldingAndOutlineProvider();
	vscode.languages.registerFoldingRangeProvider('beancount', provider);
	const settings = vscode.workspace.getConfiguration("vscode-org-fold");
    const languages = settings.get<string[]>("languagesToFold", []);
	// Register the fold provider for all languages in the settings
	for (let i = 0; i < languages.length; i++) {
        vscode.languages.registerFoldingRangeProvider(languages[i], provider);
	}
}

// This method is called when your extension is deactivated
export function deactivate() {}
