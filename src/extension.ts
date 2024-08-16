import * as vscode from vscode;

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand(back4appIntegration.helloWorld, () => {
        vscode.window.showInformationMessage(Hello World from Back4App Integration!);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
