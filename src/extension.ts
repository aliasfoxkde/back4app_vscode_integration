import * as vscode from "vscode";
import axios from "axios";

// Function to fetch repositories of a user
async function fetchRepositories(): Promise<string[]> {
    try {
        const response = await axios.get("https://api.github.com/user/repos", {
            headers: {
                Authorization: `token YOUR_GITHUB_TOKEN`
            }
        });
        return response.data.map((repo: any) => repo.full_name);
    } catch (error) {
        console.error(error);
        return [];
    }
}

export function activate(context: vscode.ExtensionContext) {
    let helloWorldCommand = vscode.commands.registerCommand("back4appIntegration.helloWorld", () => {
        vscode.window.showInformationMessage("Hello World from Back4App Integration!");
    });

    let listReposCommand = vscode.commands.registerCommand("back4appIntegration.listRepos", async () => {
        const repos = await fetchRepositories();
        if (repos.length > 0) {
            vscode.window.showQuickPick(repos, {
                placeHolder: "Select a repository"
            });
        } else {
            vscode.window.showInformationMessage("No repositories found or there was an error fetching them.");
        }
    });

    context.subscriptions.push(helloWorldCommand);
    context.subscriptions.push(listReposCommand);
}

export function deactivate() {}
