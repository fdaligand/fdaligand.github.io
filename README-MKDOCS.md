# Daily Notes with MkDocs

This repository now includes a beautiful MkDocs setup for publishing daily notes written in Markdown.

## 🚀 Quick Start

### Writing Notes
1. Create/edit Markdown files in the `docs/` folder
2. Add your daily notes to `docs/notes/2024/` (or create new months/years)
3. Commit and push to GitHub
4. Your site updates automatically at https://fdaligand.github.io

### Local Development
```bash
# Install dependencies
pip install -r requirements.txt

# Serve locally (with live reload)
mkdocs serve

# Build static site
mkdocs build
```

## 📁 File Structure
```
docs/
├── index.md              # Homepage
├── about.md              # About page
└── notes/
    └── 2024/
        ├── january.md    # January 2024 notes
        ├── february.md   # February 2024 notes
        └── ...
```

## ✍️ Writing Daily Notes

### Simple Format
```markdown
# Month Year Notes

## January 15, 2024

### Topic/Category
Your notes here...

### Another Topic
More notes...

---
```

### Advanced Features

#### Admonitions (Callouts)
```markdown
!!! tip "Pro Tip"
    This creates a highlighted tip box

!!! note "Important"
    This creates a note box

!!! warning "Caution"
    This creates a warning box
```

#### Code Blocks
```markdown
```python
def hello_world():
    print("Hello, World!")
```
```

#### Task Lists
```markdown
- [x] Completed task
- [ ] Pending task
```

## 🎨 Customization

Edit `mkdocs.yml` to:
- Change site name and description
- Modify theme colors
- Add new navigation sections
- Configure plugins

## 🔄 Automatic Deployment

GitHub Actions automatically:
1. Builds your MkDocs site when you push changes
2. Deploys to GitHub Pages
3. Updates your live site at https://fdaligand.github.io

## 📱 Features

- ✅ **Mobile responsive** - Looks great on all devices
- ✅ **Dark/light mode** - Toggle in top right
- ✅ **Search** - Find your notes instantly
- ✅ **Navigation** - Automatic menu generation
- ✅ **Git integration** - Shows last modified dates
- ✅ **Syntax highlighting** - Beautiful code blocks
- ✅ **Zero CSS/HTML** - Just write Markdown!

## 🛠️ Workflow

1. **Write** - Create `.md` files in `docs/`
2. **Commit** - `git add . && git commit -m "Add daily notes"`
3. **Push** - `git push origin master`
4. **Done** - Site updates automatically!

---

*Happy note-taking! 📝*