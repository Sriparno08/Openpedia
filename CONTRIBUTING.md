# Contributing Guidelines

Ready to contribute?

Please read the guidelines carefully before making your first contribution:

- [Issues](#issues)
- [Pull Requests](#pull-requests)
- [Creating a Pull Request](#creating-a-pull-request)
- [Style Guide for Commits](#style-guide-for-commits)
- [Style Guide for Issues and Pull Requests](#style-guide-for-issues-and-pull-requests)

## Issues

- Always create an issue before creating a pull request.
- Always ensure that the issue to be created is unique.
- Always ensure that the resource to be added is unique.
- Always start working on an issue after getting assigned to it.

<hr>

## Pull Requests

- Each pull request should contain a single logical change.
- The pull request title should summarize the changes made in it.
- The changes made in the pull request should be described in detail.
- The pull request should be linked to an open issue.

<hr>

## Creating a Pull Request

Before moving on, please ensure that these technologies are installed on your system:

- Node.js
- NPM

Here is the step-by-step process of creating a pull request in this repository:

Step 1: Fork the repository

Step 2: Clone the forked repository to your local machine

```sh
git clone https://github.com/<github-username>/Openpedia.git
```
    
Step 3: Navigate to the project directory

```sh
cd Openpedia
```

Step 4: Install the required dependencies

```sh
npm install
```

Step 5: Create and switch to a new branch

```sh
git switch -c <branch>
```

Step 6: Launch the website on `localhost:8080`

```sh
npm run build
```

Step 7: Make changes to the project and stage them

```sh
git add .
```

Step 8: Commit the changes

```sh
git commit -m "<message>"
```

Step 9: Push the changes to the corresponding remote branch

```sh
git push origin <branch>
```

Step 10: Create a pull request!

<hr>

## Style Guide for Commits

If you are adding a resource that belongs to any of these categories:

- Introduction to Open Source
- Learn Git and GitHub
- Contributing to Open Source

The commit message should be:

```sh
git commit -m "[Resource] Add a resource from <publisher>"
```

If you are adding a resource that belongs to any of these categories:

- Beginner-Friendly Repos
- Open Source Programs

The commit message should be:

```sh
git commit -m "[Resource] Add <name>"
```

<hr>

## Style Guide for Issues and Pull Requests

Here are the types of issues and pull requests that can be created in this repository:

- `Resource`: Changes related to a resource addition
- `Docs`: Changes related to the documentation
- `Chore`: Changes related to the codebase (but unrelated to the user interface or a feature addition)
- `UI`: Changes related to the user interface
- `Feat`: Changes related to a feature addition

If you are opening an issue or a pull request, the title should be:

```
[Resource] Add MDN Web Docs
```
