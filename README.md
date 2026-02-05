# Web-Advanced Winter 2026 🏛️

Welcome to the Web-Advanced Subteam's Winter 2026 Website! This is a Next.js application designed to help manage clubs and organizations efficiently. Below are all the things that you will need to know in order to contribute to this project!

## Setup 💻

Follow these steps in order to ensure everything gets set up correctly:

1. **Fork the repo**
2. **Clone the forked repo:**
   ```bash
   $ git clone <SSH/HTTPS Link of forked repo>
   ```
3. **Navigate to the cloned repo:**
   ```bash
   $ cd web-advanced-w26
   ```
4. **Install dependencies:**
   ```bash
   $ npm install
   # or if you prefer yarn
   $ yarn install
   ```
5. **Start the development server:**
   ```bash
   $ npm run dev
   # or
   $ yarn dev
   ```
6. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Tech Stack 🛠️

- **Framework:** Next.js 15.5.3 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Linting:** ESLint with Next.js config
- **Package Manager:** npm (yarn also supported)

## Contributing 📜

Please follow very carefully to correctly contribute to this project! Follow these steps in order whenever you are working:

### 1. Pulling Current Changes

The first step is to pull all changes made to this repo, that way we don't have conflicting code whenever we develop. Follow these exact steps!

**The following is a ONE TIME command only:**

```bash
# If working with SSH:
$ git remote add upstream git@github.com:MichiganHackersAdvancedWebDev-25-26/web-advanced-w26.git

# If working with HTTPS:
$ git remote add upstream https://github.com/MichiganHackersAdvancedWebDev-25-26/web-advanced-w26.git
```

**Fetch all local changes (Do this every time before you start coding):**

```bash
$ git fetch upstream
```

**Overwrite your changes with the current changes (Also do this before you start coding):**

```bash
$ git rebase upstream/main
```

### 2. Adding Features & Making Pull Requests

This section will cover how to actually submit changes that you made (i.e new features, bug fixes, etc). Follow along closely!

**Before you start coding:**

You need to work on your code in a separate branch, each branch represents a feature that you made! The "main" branch represents the very current branch with the latest code, never push or make changes to this branch!

```bash
# Run the following before you start coding:
$ git checkout -b <feature you are going to add>

# Example:
$ git checkout -b adding-member-management

# Install latest packages
$ npm install
```

Now, go ahead and code whatever you want! You can start by modifying files in the `app/` directory.

**Once finished, run the following commands in order:**

```bash
# Add changes:
$ git add .

# Commit changes with a message:
$ git commit -m "feat/chore/fix: some change"

# Push changes with the branch name specified:
$ git push origin <branch name>
# Example: $ git push origin adding-member-management
```

**Create a pull request:**

1. Navigate to GitHub, and create a pull request
2. Describe all the changes you made, be in depth
3. Submit the pull request

### 3. Updating Changes to a Branch

If you ever decide to make a new feature, make sure to do it to a new branch! Never have a feature that you worked on later in the same branch, just make a new branch and work there!

```bash
# To navigate to a new branch:
$ git checkout -b newBranchName

# When you push changes, push it to this branch:
$ git push origin newBranchName
```

### 4. Getting Latest Changes

Make sure the main branch always has the current changes. To easily do this, just run the following (do this after ANY pull requests have been pushed to the main branch!

```bash
# Switch to the main branch
$ git checkout main

# Fetch latest changes
$ git fetch upstream

# Rebase with upstream
$ git rebase upstream/main
```

**Important:** you should never be working in the main branch, this will cause conflicts!

```bash
# Check what current branch you're in (starred branch is the one you are currently in!)
$ git branch
```

## Project Structure 📁

```
web-advanced-w26/
├── app/                    # Next.js App Router directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── public/                # Static assets
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── next.config.ts         # Next.js configuration
```

## Available Scripts 🚀

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

## Git Workflow for Beginners 🎯

If you're new to Git, here's a simple explanation of what each command does:

- **`git clone`** - Downloads the repository to your computer
- **`git checkout -b`** - Creates and switches to a new branch
- **`git add .`** - Stages all your changes for commit
- **`git commit -m`** - Saves your changes with a message
- **`git push`** - Uploads your changes to GitHub
- **`git fetch`** - Downloads the latest changes from the remote repository
- **`git rebase`** - Applies the latest changes to your current branch

## Commit Message Format 📝

Use this format for your commit messages:

- `feat:` - New features
- `fix:` - Bug fixes
- `chore:` - Maintenance tasks
- `docs:` - Documentation updates
- `style:` - Code formatting changes
- `refactor:` - Code refactoring

Example: `feat: add member registration form`

## Getting Help 🤝

If you run into any issues:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Check the [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Ask questions in the project's issues or discussions

That is it for contributing! Again, you need to pull changes, create a new branch with the branch name being what feature you are going to work on, code whatever you need to, push changes to GitHub, then create a pull request!

Happy coding! 🎉
