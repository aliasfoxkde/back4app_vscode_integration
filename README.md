# Back4App VSCode Integration

A VSCode extension for integrating Back4App functionalities.

## Features

- Basic "Hello World" command to ensure the extension is working.
- List all repositories of the authenticated GitHub user.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/aliasfoxkde/back4app_vscode_integration.git
    ```
2. Navigate to the project directory:
    ```bash
    cd back4app_vscode_integration
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

### Run the Extension

1. Open the project in VSCode.
2. Press `F5` to open a new VSCode window with the extension loaded.

### Commands

1. **Hello World Command**:
    - Open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
    - Type `Hello World` and select the "Hello World" command.

2. **List Repositories Command**:
    - Open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
    - Type `List Repositories` and select the "List Repositories" command.

3. **Interact with the Agent**:
    - Open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
    - Type `Interact with Agent` and select the "Interact with Agent" command.
    - Provide input to interact with the agent and receive a response.

## Development

### Build the Extension

To build the extension, run:
```bash
npm run compile
```

### Watch for Changes

To watch for changes and automatically rebuild, run:
```bash
npm run watch
```

### Run Tests

To run the tests, run:
```bash
npm test
```

### Lint the Code

To lint the code, run:
```bash
npm run lint
```

## Release Notes

See [release notes](./CHANGELOG.md)

