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

// Function to interact with the agent
async function interactWithAgent(message: string): Promise<string> {
    // This is a placeholder implementation. This should route to the actual agent API.
    return `You said: ${message}`;
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

    let interactCommand = vscode.commands.registerCommand("back4appIntegration.interact", async () => {
        const message = await vscode.window.showInputBox({ placeHolder: "Ask the agent for help or input" });
        if (message) {
            const response = await interactWithAgent(message);
            vscode.window.showInformationMessage(response);
        }
    });

    context.subscriptions.push(helloWorldCommand);
    context.subscriptions.push(listReposCommand);
    context.subscriptions.push(interactCommand);
}

export function deactivate() {}
