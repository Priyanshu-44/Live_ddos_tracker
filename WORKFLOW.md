# 📊 Project Workflow Guide

## 🔄 Complete Development & Deployment Workflow

This document outlines the complete workflow for the Live DDoS Tracker project from local development to GitHub and deployment.

---

## 1️⃣ Local Development Workflow

### Initial Setup

```
┌─────────────────────────────────────┐
│ 1. Clone Repository                 │
│ git clone <repo-url>                │
│ cd Live_ddos_tracker                │
└────────────┬────────────────────────┘
             │
┌────────────▼────────────────────────┐
│ 2. Create Virtual Environment       │
│ python -m venv venv                 │
│ venv\Scripts\activate (Windows)     │
│ source venv/bin/activate (Linux)    │
└────────────┬────────────────────────┘
             │
┌────────────▼────────────────────────┐
│ 3. Install Dependencies             │
│ pip install -r requirements.txt     │
└────────────┬────────────────────────┘
             │
┌────────────▼────────────────────────┐
│ 4. Run Project                      │
│ python -m uvicorn \                 │
│   backend.main:app --reload         │
└────────────┬────────────────────────┘
             │
┌────────────▼────────────────────────┐
│ 5. Open Browser                     │
│ http://localhost:8000               │
└─────────────────────────────────────┘
```

### Development Cycle

```
┌─────────────────────────────────────┐
│ Make Code Changes                   │
├─────────────────────────────────────┤
│ - Edit files                        │
│ - Backend: main.py, fetch.py        │
│ - Frontend: script.js, index.html   │
└────────────┬────────────────────────┘
             │
┌────────────▼────────────────────────┐
│ Test Locally                        │
├─────────────────────────────────────┤
│ - Restart server if needed          │
│ - Check browser console (F12)       │
│ - Verify API responses              │
└────────────┬────────────────────────┘
             │
┌────────────▼────────────────────────┐
│ If Working ✓                        │
│ Proceed to Git Workflow             │
└────────────────────────────────────┘
```

---

## 2️⃣ Git & GitHub Workflow

### Creating a Pull Request

```
┌─────────────────────────────────────────────────────────┐
│ 1. Create Feature Branch                                │
│    git checkout -b feature/your-feature-name            │
│    git checkout -b fix/bug-description                  │
│    git checkout -b docs/documentation-update            │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│ 2. Make Changes (Repeat as needed)                      │
│    - Edit files                                         │
│    - Test thoroughly                                    │
│    - Commit: git add .                                  │
│    - Commit: git commit -m "type: description"          │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│ 3. Push to Your Fork                                    │
│    git push origin feature/your-feature-name            │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│ 4. Open Pull Request on GitHub                          │
│    - Go to Priyanshu-44/Live_ddos_tracker              │
│    - Click "Compare & pull request"                     │
│    - Fill PR template                                  │
│    - Submit PR                                         │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│ 5. Code Review & Feedback                               │
│    - Maintainer reviews code                            │
│    - May request changes                                │
│    - Discuss improvements                               │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│ 6. Address Feedback (if needed)                         │
│    git add .                                            │
│    git commit -m "address: review feedback"             │
│    git push origin feature/your-feature-name            │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│ 7. PR Approved & Merged                                 │
│    - Maintainer merges to main                          │
│    - Your changes are live!                             │
└─────────────────────────────────────────────────────────┘
```

### Commit Message Convention

```
feat   → New feature
fix    → Bug fix
docs   → Documentation
style  → Code style (no logic change)
refactor → Code restructuring
test   → Test additions
chore  → Dependencies, build changes

EXAMPLES:
✓ feat(frontend): add dark mode toggle
✓ fix(backend): resolve 404 in /events endpoint
✓ docs: update deployment instructions
✓ refactor(api): optimize event fetching
```

---

## 3️⃣ Deployment Workflow

### Heroku Deployment

```
┌──────────────────────────────────────┐
│ 1. Install Heroku CLI                │
│    https://devcenter.heroku.com/cli  │
└────────────┬─────────────────────────┘
             │
┌────────────▼─────────────────────────┐
│ 2. Login to Heroku                   │
│    heroku login                      │
│    (Enter credentials)               │
└────────────┬─────────────────────────┘
             │
┌────────────▼─────────────────────────┐
│ 3. Create Heroku App                 │
│    heroku create your-app-name       │
└────────────┬─────────────────────────┘
             │
┌────────────▼─────────────────────────┐
│ 4. Create Procfile                   │
│    web: uvicorn backend.main:app \   │
│      --host 0.0.0.0 --port $PORT    │
└────────────┬─────────────────────────┘
             │
┌────────────▼─────────────────────────┐
│ 5. Set Environment Variables         │
│    heroku config:set \               │
│    CLOUDFLARE_API_TOKEN=xxx          │
└────────────┬─────────────────────────┘
             │
┌────────────▼─────────────────────────┐
│ 6. Deploy                            │
│    git push heroku main              │
└────────────┬─────────────────────────┘
             │
┌────────────▼─────────────────────────┐
│ 7. Open Live App                     │
│    heroku open                       │
│    Your app is live!                 │
└──────────────────────────────────────┘
```

### Render Deployment

```
┌──────────────────────────────────────┐
│ 1. Push to GitHub                    │
│    git push origin main              │
└────────────┬─────────────────────────┘
             │
┌────────────▼─────────────────────────┐
│ 2. Go to Render.com                  │
│    Sign up/Login with GitHub         │
└────────────┬─────────────────────────┘
             │
┌────────────▼─────────────────────────┐
│ 3. Create New Service                │
│    - Select GitHub repository        │
│    - Choose Live_ddos_tracker        │
└────────────┬─────────────────────────┘
             │
┌────────────▼─────────────────────────┐
│ 4. Configure Settings                │
│    - Build Command:                  │
│      pip install -r requirements.txt │
│    - Start Command:                  │
│      uvicorn backend.main:app \      │
│      --host 0.0.0.0 --port 10000    │
└────────────┬─────────────────────────┘
             │
┌────────────▼─────────────────────────┐
│ 5. Add Environment Variables         │
│    CLOUDFLARE_API_TOKEN=xxx          │
└────────────┬─────────────────────────┘
             │
┌────────────▼─────────────────────────┐
│ 6. Deploy                            │
│    Click "Create Web Service"        │
│    Auto-deploys on main branch push  │
└────────────┬─────────────────────────┘
             │
┌────────────▼─────────────────────────┐
│ 7. Access Your App                   │
│    https://your-app.onrender.com    │
└──────────────────────────────────────┘
```

---

## 4️⃣ Release & Version Management

### Creating a Release on GitHub

```
┌───────────────────────────────────────┐
│ 1. Update Version Numbers             │
│    - In README.md (if applicable)     │
│    - In package metadata              │
└─────────────┬───────────────────────┘
              │
┌──────────────▼───────────────────────┐
│ 2. Create Release Branch              │
│    git checkout -b release/v1.0.0     │
└─────────────┬───────────────────────┘
              │
┌──────────────▼───────────────────────┐
│ 3. Commit & Tag                       │
│    git add .                          │
│    git commit -m "release: v1.0.0"    │
│    git tag -a v1.0.0 -m "v1.0.0"     │
│    git push origin release/v1.0.0     │
│    git push origin v1.0.0             │
└─────────────┬───────────────────────┘
              │
┌──────────────▼───────────────────────┐
│ 4. GitHub Release                     │
│    - Go to Releases tab               │
│    - Click "Create a new release"     │
│    - Select v1.0.0 tag                │
│    - Add release notes                │
│    - Publish release                  │
└───────────────────────────────────────┘
```

---

## 5️⃣ Issue & Bug Tracking

### Bug Report Workflow

```
┌───────────────────────────────────────┐
│ User Reports Bug                      │
│ (GitHub Issues)                       │
└─────────────┬───────────────────────┘
              │
┌──────────────▼───────────────────────┐
│ Issue Created                         │
│ - Title: Clear description            │
│ - Body: Steps to reproduce            │
│ - Labels: bug, priority               │
└─────────────┬───────────────────────┘
              │
┌──────────────▼───────────────────────┐
│ Developer Assigns Issue               │
│ - Adds to project board               │
│ - Sets milestone                      │
└─────────────┬───────────────────────┘
              │
┌──────────────▼───────────────────────┐
│ Create Fix Branch                     │
│ git checkout -b fix/#123-bug-desc     │
└─────────────┬───────────────────────┘
              │
┌──────────────▼───────────────────────┐
│ Test Fix                              │
│ - Verify bug is fixed                 │
│ - No new issues introduced            │
└─────────────┬───────────────────────┘
              │
┌──────────────▼───────────────────────┐
│ Create Pull Request                   │
│ - Link to issue: Closes #123          │
│ - Explain fix                         │
└─────────────┬───────────────────────┘
              │
┌──────────────▼───────────────────────┐
│ Code Review                           │
│ - Maintainer reviews                  │
│ - Approves if good                    │
└─────────────┬───────────────────────┘
              │
┌──────────────▼───────────────────────┐
│ Merge & Close Issue                   │
│ - PR merged to main                   │
│ - Issue automatically closes          │
└─────────────┬───────────────────────┘
              │
┌──────────────▼───────────────────────┐
│ Deploy to Production                  │
│ - New version deployed                │
│ - Bug is fixed for all users          │
└───────────────────────────────────────┘
```

---

## 6️⃣ Repository Maintenance

### Regular Maintenance Tasks

```
Weekly:
├─ Review open issues
├─ Check pull requests
├─ Update dependencies
└─ Monitor performance

Monthly:
├─ Release new version
├─ Update documentation
├─ Archive old branches
└─ Analyze usage metrics

Quarterly:
├─ Plan roadmap
├─ Community feedback
├─ Security audit
└─ Performance optimization
```

### Dependency Updates

```
┌────────────────────────────────────┐
│ 1. Check for Updates                │
│    pip list --outdated              │
└─────────────┬──────────────────────┘
              │
┌──────────────▼──────────────────────┐
│ 2. Update requirements.txt           │
│    pip install --upgrade <package>   │
│    pip freeze > requirements.txt     │
└─────────────┬──────────────────────┘
              │
┌──────────────▼──────────────────────┐
│ 3. Test Thoroughly                   │
│    - Run app locally                 │
│    - Check for compatibility issues  │
│    - Test all features               │
└─────────────┬──────────────────────┘
              │
┌──────────────▼──────────────────────┐
│ 4. Commit & Push                     │
│    git commit -m "chore: update deps"│
│    git push origin main              │
└────────────────────────────────────┘
```

---

## 📋 Checklist Summary

### Before Pushing Code
- [ ] Code works locally
- [ ] No console errors
- [ ] Tests pass
- [ ] Code is clean
- [ ] Comments added where needed

### Before Committing
- [ ] `git status` shows changes
- [ ] Only intended files changed
- [ ] Large files not included
- [ ] `.gitignore` is working

### Before Creating PR
- [ ] Branch is up-to-date
- [ ] Commit messages are clear
- [ ] Changes are focused
- [ ] README/docs updated if needed
- [ ] No merge conflicts

### Before Deploying
- [ ] All tests pass
- [ ] Code reviewed
- [ ] Environment variables set
- [ ] Backup created
- [ ] Rollback plan ready

---

## 🔗 Quick Links

- **Repository**: https://github.com/Priyanshu-44/Live_ddos_tracker
- **Issues**: https://github.com/Priyanshu-44/Live_ddos_tracker/issues
- **Pull Requests**: https://github.com/Priyanshu-44/Live_ddos_tracker/pulls
- **Contributing Guide**: CONTRIBUTING.md

---

**Last Updated**: January 29, 2026
