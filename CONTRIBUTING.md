# Contributing Guidelines

Ready to contribute?

Please go through the guidelines below and make your first contribution:

- [Issues](#issues)
- [Pull Requests](#pull-requests)
- [Making a Pull Request](#making-a-pull-request)
- [Style Guide for Commit Messages](#style-guide-for-commit-messages)

## Issues

- Always create an issue before making a PR.
- Always ensure that there is no other open issue similar to the one that you want to create.
- Always start working on an issue after getting assigned to it.

## Pull Requests

- Each PR should contain a single logical change.
- The PR title should summarize the changes made in it.
- Describe the changes made in the PR to the best of your ability.
- The PR should be linked to the corresponding issue (Closes/Fixes #100).

## Making a Pull Request

**Step 1:** Fork the repository by clicking on the `Fork` button, located at the top right corner of the repository page.

**Step 2:** Clone the forked repository to your machine by typing the following in Git Bash:

```
git clone https://github.com/<your-github-username>/Start-Contributing.git
```

**Step 3:** Navigate to the project directory:

```
cd Start-Contributing
```

**Step 4:** Set upstream:

```
git remote add upstream https://github.com/Sriparno08/Start-Contributing.git
```

**Step 5:** Pull changes from upstream if there are any:

```
git pull upstream main
```

**Step 6:** Create and switch to a new branch:

```
git switch -c <branch>
```

**Step 7:** Modify `README.md` and stage changes:

```
git add README.md
```

**Step 8:** Commit changes:

```
git commit -m "<message>"
```

**Step 9:** Push local commits to origin:

```
git push origin <branch>
```

**Step 10:** Make a Pull Request!

## Style Guide for Commit Messages
  
If you are contributing a resource that refers to any of the first three sections, the commit message would be:

```
git commit -m "Add a/an <resource-type> from <publisher>"
```

Resource Types:

- Article
- YouTube Video

If you are contributing an open source program or a beginner-friendly repository, the commit message would be:

```
git commit -m "Add <name>"
```

Resource Types:

- Article
- YouTube Video

If you are contributing an open source program to the repository, the commit message should be:
```
git commit -m "Add <program>"
