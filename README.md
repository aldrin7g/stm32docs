## Changes in docusaurus.config.js

  `(https://www.youtube.com/watch?v=NiHFqziyvyk)`

url: 'https://aldrin7g.github.io',
baseUrl: '/STM32_Bootcamp/',
trailingSlash: false,
organizationName: 'aldrin7g', // Usually your GitHub org/user name.
projectName: 'STM32_Bootcamp', // Usually your repo name.

---

## Install Git in Windows
```bash
npm install --global yarn
yarn --version
```
---

## SSH Keys in GitHub

`(https://www.youtube.com/watch?v=X40b9x9BFGo)`

**// paste the below commands in gitbash in PC**

`Creates a SSH Key for the PC`

```bash
ssh-keygen -t ed25519 -C "aldring@karunya.edu.in"
```

press `Enter`

press `Enter`

`Copies the SSH Key in the Clipboard`
```bash
  clip < ~/.ssh/id_ed25519.pub
```
- **Now paste the key in SSH keys in GitHub under SSH Keys in Settings** 
- **Give any Title**


## Commit Changes to GitHub, paste codes in Gitbash

```bash
git init
git add .
git commit -m "Initial commit"
```

## Again run the below commands in gitbash in PC
```bash
git config --global user.name "aldrin7g"
git config --global user.email "aldring@karunya.edu.in"
```
```bash
GIT_USER=aldrin7g USE_SSH=true yarn deploy
```
