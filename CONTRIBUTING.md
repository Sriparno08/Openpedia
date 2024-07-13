# Contributing Guidelines

Ready to contribute?

Please go through the guidelines below to make your first contribution:

- [Issues](#issues)
- [Pull Requests](#pull-requests)
- [Creating a Pull Request](#creating-a-pull-request)
- [Style Guide for Commit Messages](#style-guide-for-commit-messages)
- [Style Guide for Pull Requests](#style-guide-for-pull-requests)

## Issues

- Always create an issue before creating a pull request.
- Always ensure that there is no other open issue similar to the one that you want to create.
- Always start working on an issue after getting assigned to it.

<hr>

## Pull Requests

- Each pull request should contain a single logical change.
- The pull request title should summarize the changes made in it.
- Describe the changes made in the pull request to the best of your ability.
- The pull request should be linked to the corresponding issue.

<hr>

## Creating a Pull Request

- Fork the repository

- Clone the forked repository to your local machine:

    ```sh
    git clone https://github.com/<github-username>/Openpedia.git
    ```
    
- Navigate to the project directory:

    ```sh
    cd Openpedia
    ```

- Install all dependencies:

    ```sh
    npm install
    ```

- Create and switch to a new branch:

    ```sh
    git switch -c <branch>
    ```

- Launch the application:

    ```sh
    npm run build
    ```

- Make changes to the project and stage them:

    ```sh
    git add .
    ```

- Commit the changes:

    ```sh
    git commit -m "<message>"
    ```

- Push the changes to the correponding remote branch:

    ```sh
    git push origin <branch>
    ```

- Create a pull request!

<hr>

## Style Guide for Commit Messages

If you are adding a resource that belongs to any of these following categories:

- Introduction to Open Source
- Learn Git and GitHub
- Contributing to Open Source

The commit message should be:

```
git commit -m "[Docs] Add a resource from <publisher>"
```

If you are adding a resource that belongs to any of these following categories:

- Beginner-Friendly Repos
- Open Source Programs

The commit message should be:

```
git commit -m "[Docs] Add <name>"
```

<hr>

## Style Guide for Pull Requests

There can be four types of pull requests on this repository:

- `Docs`: Changes related to the documentation
- `Chore`: Changes related to the codebase, but unrelated to the UI or adding a new feature
- `UI`: Changes related to the UI
- `Feat`: Changes related to adding a new feature

When you are opening a pull request, ensure that you are providing the correct type in the pull request title:

```
[Docs] Add MDN Web Docs
```
