# Contributing to Live DDoS Tracker

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## 📋 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help others learn and grow

## 🔄 How to Contribute

### Step 1: Fork & Setup

```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/YOUR-USERNAME/Live_ddos_tracker.git
cd Live_ddos_tracker

# Add upstream remote
git remote add upstream https://github.com/Priyanshu-44/Live_ddos_tracker.git
```

### Step 2: Create Feature Branch

```bash
# Update main branch
git fetch upstream
git checkout main
git merge upstream/main

# Create new branch
git checkout -b feature/amazing-feature
```

### Step 3: Development

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate      # Windows

# Install dependencies
pip install -r requirements.txt

# Make your changes and test
python -m uvicorn backend.main:app --reload
```

### Step 4: Commit Changes

Follow the commit message convention:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style (no logic change)
- `refactor` - Code refactoring
- `test` - Test addition/modification
- `chore` - Build/dependency changes

**Examples:**
```bash
git commit -m "feat(frontend): add dark mode toggle"
git commit -m "fix(backend): resolve 404 error in API endpoint"
git commit -m "docs: update README with deployment instructions"
```

### Step 5: Push & Create PR

```bash
# Push to your fork
git push origin feature/amazing-feature

# Go to GitHub and create a Pull Request
# - Clear description of changes
# - Reference any related issues (#issue-number)
# - Add screenshots if UI changes
```

## 📝 Pull Request Guidelines

### Before Submitting

- [ ] Code follows project style
- [ ] Tested locally and works
- [ ] No console errors/warnings
- [ ] Updated README if needed
- [ ] Commit messages are descriptive

### PR Description Template

```markdown
## Description
Brief description of changes

## Type
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation
- [ ] Performance improvement

## Related Issues
Closes #123

## Changes
- Change 1
- Change 2
- Change 3

## Testing
Steps to test the changes

## Screenshots (if applicable)
Add before/after screenshots
```

## 🎯 Areas for Contribution

### Backend
- [ ] Optimize API performance
- [ ] Add caching mechanisms
- [ ] Support more data sources
- [ ] Improve error handling
- [ ] Add authentication
- [ ] Create admin dashboard

### Frontend
- [ ] Add dark mode
- [ ] Improve responsive design
- [ ] Add filters/search
- [ ] Create statistics panel
- [ ] Add real-time WebSocket support
- [ ] Performance optimization

### Documentation
- [ ] API documentation
- [ ] Deployment guides
- [ ] Architecture diagrams
- [ ] Troubleshooting guides
- [ ] Tutorial videos

### Testing
- [ ] Unit tests
- [ ] Integration tests
- [ ] E2E tests
- [ ] Performance tests

## 🐛 Reporting Issues

### Security Issues
⚠️ **Do NOT** open a public issue for security vulnerabilities

Email: [maintainer email] with:
- Description of vulnerability
- Steps to reproduce
- Potential impact

### Bug Reports

Open an issue with:

```markdown
## Description
Clear description of the bug

## Reproduction Steps
1. Step 1
2. Step 2
3. ...

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- OS: (Windows/Linux/macOS)
- Python version: 3.x.x
- Browser: (if frontend issue)

## Additional Info
Screenshots, logs, etc.
```

### Feature Requests

```markdown
## Description
Clear description of requested feature

## Use Case
Why this feature is needed

## Proposed Solution
How to implement it

## Alternatives Considered
Other approaches
```

## 💻 Development Setup

### Requirements
- Python 3.10+
- Git
- Terminal/Command Prompt

### Installation

```bash
# Clone repository
git clone https://github.com/Priyanshu-44/Live_ddos_tracker.git
cd Live_ddos_tracker

# Create virtual environment
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run project
python -m uvicorn backend.main:app --reload
```

### File Structure Understanding

```
Live_ddos_tracker/
├── backend/
│   ├── main.py           # FastAPI server & routes
│   ├── fetch.py          # Data fetching logic
│   └── __init__.py
├── frontend/
│   ├── index.html        # Main page
│   ├── script.js         # Map logic & animations
│   └── style.css         # Styling
├── README.md             # Project documentation
├── requirements.txt      # Python dependencies
├── .gitignore           # Git ignore rules
└── CONTRIBUTING.md      # This file
```

## 🧪 Testing Your Changes

### Local Testing

1. **Backend**: Verify API endpoints work
   ```bash
   curl http://localhost:8000/events
   ```

2. **Frontend**: Check browser console for errors
   - Open DevTools (F12)
   - Look for errors/warnings
   - Test map interactions

3. **End-to-End**: Full application flow
   - Start backend
   - Open frontend
   - Verify animations work
   - Check network requests

## 📚 Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Leaflet.js Documentation](https://leafletjs.com/)
- [Git Guide](https://git-scm.com/doc)
- [Python Best Practices](https://pep8.org/)

## ✅ Checklist Before Submitting PR

- [ ] Branch is up-to-date with `upstream/main`
- [ ] Code follows project style
- [ ] All tests pass locally
- [ ] No new warnings/errors
- [ ] README updated (if needed)
- [ ] Commit messages are clear
- [ ] PR description is complete
- [ ] No commented-out code
- [ ] Dependencies are documented

## 🙏 Thank You!

Your contributions make this project better. We appreciate your time and effort!

---

**Questions?** Open an issue or contact the maintainers.

Happy Contributing! 🚀
