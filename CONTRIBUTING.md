# Contributing Guidelines

This repository is waiting for your contribution! Please go through the guidelines below before contributing:

- [Issues](#issues)
- [Pull Requests](#pull-requests)
- [Making a Pull Request](#making-a-pull-request)
- [Style Guide for Commit Messages](#style-guide-for-commit-messages)

## Issues

- Always create an issue before making a PR.
- Always ensure that your PR is linked to its corresponding issue (e.g., Closes #100).
- Before you create an issue, make sure that there is no other open issue similar to the one you want to create.

## Pull Requests

- Each PR should contain a single logical change.
- The PR title should summarize the changes made in it.

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

**Step 7:** Add a resource to the `README.md` file

**Step 8:** Stage changes:

```
git add README.md
```

**Step 9:** Commit changes:

```
git commit -m "<message>"
```

**Step 10:** Push local commits to origin:

```
git push origin <branch>
```

**Step 11:** Make a Pull Request!

## Style Guide for Commit Messages
  
If you want to add an article/tutorial series/Youtube video from a publisher (e.g., Opensource.com) to this repository, the commit message should be:

```
git commit -m "Add an article/tutorial series/Youtube video from Opensource.com"
```

If you want to add an Open Source program (e.g., MLH Fellowship) to this repository, the commit message should be:

```
git commit -m "Add MLH Fellowship"
