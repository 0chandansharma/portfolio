import os

# Base project structure
structure = {
    "portfolio": {
        "public": {
            "index.html": None,
            "favicon.ico": None,
            "assets": {
                "images": None,
                "pdfs": None,
                "icons": None
            }
        },
        "src": {
            "components": {
                "layout": {
                    "Navbar.jsx": None,
                    "Footer.jsx": None,
                    "Layout.jsx": None
                },
                "sections": {
                    "Hero.jsx": None,
                    "About.jsx": None,
                    "Experience.jsx": None,
                    "Skills.jsx": None,
                    "Projects.jsx": None,
                    "Certifications.jsx": None,
                    "Blog.jsx": None,
                    "Contact.jsx": None
                },
                "ui": {
                    "Button.jsx": None,
                    "Card.jsx": None,
                    "SkillBar.jsx": None,
                    "Timeline.jsx": None,
                    "Modal.jsx": None,
                    "Carousel.jsx": None
                },
                "shared": {
                    "SectionTitle.jsx": None,
                    "SocialLinks.jsx": None,
                    "ThemeToggle.jsx": None
                }
            },
            "hooks": {
                "useScrollAnimation.js": None,
                "useTheme.js": None
            },
            "data": {
                "experience.js": None,
                "skills.js": None,
                "projects.js": None,
                "certifications.js": None,
                "blogs.js": None
            },
            "styles": {
                "globals.css": None,
                "variables.css": None
            },
            "utils": {
                "animations.js": None
            },
            "App.jsx": None,
            "index.js": None
        },
        "package.json": None
    }
}

def create_structure(base_path, struct):
    for name, content in struct.items():
        path = os.path.join(base_path, name)
        if content is None:
            # Create a file
            os.makedirs(os.path.dirname(path), exist_ok=True)
            with open(path, 'w') as f:
                pass  # create empty file
        else:
            # Create a directory
            os.makedirs(path, exist_ok=True)
            create_structure(path, content)

if __name__ == "__main__":
    create_structure(".", structure)
    print("✅ Portfolio project structure created successfully!")
