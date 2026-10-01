# 🐍 Download Python — Full Setup Guide

> Complete beginner-friendly Python setup guide  
> Download → Install → Verify → pip → VS Code → First Program → Virtual Environment → NumPy

---

# 📋 Setup Progress

- [ ] Python downloaded
- [ ] Python installed
- [ ] Python version verified
- [ ] pip verified
- [ ] VS Code installed
- [ ] Python Extension installed
- [ ] Python Interpreter selected
- [ ] First Python program created
- [ ] First Python program executed
- [ ] Virtual Environment created
- [ ] NumPy installed
- [ ] NumPy tested

---

# 1. 🐍 What is Python?

Python is a high-level, general-purpose programming language.

Python is commonly used for:

- Programming
- Web Development
- Data Analysis
- Artificial Intelligence
- Machine Learning
- Automation
- Scientific Computing

Python is popular because its syntax is simple and readable.

---

# 2. 🌐 Open the Official Python Website

Always download Python from the official Python website.

**Official Website:**

https://www.python.org/

**Official Download Page:**

https://www.python.org/downloads/

### 📷 Photo

![Python Official Website](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIofLJ7tlOEKSmEKW_0uELNISKfeqsEBORYQVaQ5kKKg&s=10)

- [ ] Python official website opened

---

# 3. ⬇️ Download Python

Open:

https://www.python.org/downloads/

Download the current Python version available for your operating system.

For Windows, follow the current Python.org Windows installation instructions.

### 📷 Photo

![Python Download Page](images/python-download-page.png)

- [ ] Python download page opened
- [ ] Python downloaded

---

# 4. 💻 Install Python on Windows

After downloading Python:

1. Open the downloaded installer.
2. Follow the installation instructions.
3. Complete the installation.

### 📷 Photo

![Python Installation](images/python-installation.png)

- [ ] Python installer opened
- [ ] Python installation completed

---

# 5. ⚙️ PATH Configuration

PATH allows Windows to find Python from the terminal.

If the installer provides a PATH-related option, configure it according to the official installation instructions.

### 📷 Photo

![Python PATH Setup](images/python-path.png)

- [ ] PATH configuration checked

---

# 6. ✅ Verify Python Installation

Open:

**Command Prompt** or **PowerShell**

Run:

    python --version

You can also try:

    python -V

On Windows, you can also check:

    py --version

A Python version should be displayed.

- [ ] `python --version` works
- [ ] `python -V` works
- [ ] `py --version` works

---

# 7. 🐍 Start Python

Run:

    python

The Python interactive shell should open.

You may see:

    >>>

Test Python:

    print("Hello, Python")

Exit Python:

    exit()

- [ ] Python interactive shell opened
- [ ] Test program executed
- [ ] Python shell closed

---

# 8. 📦 Check pip

`pip` is Python's package-management tool.

Check pip:

    python -m pip --version

You can also try:

    pip --version

- [ ] pip verified

---

# 9. 🔄 Upgrade pip

Upgrade pip using:

    python -m pip install --upgrade pip

After upgrading, check:

    python -m pip --version

- [ ] pip upgraded
- [ ] pip version checked

---

# 10. 📁 Create Python Project Folder

Create a folder for your Python programs.

Example:

    Python_Programs

A simple project can contain:

    Python_Programs/
    │
    ├── hello.py
    ├── variables.py
    ├── conditions.py
    ├── loops.py
    ├── strings.py
    ├── lists.py
    ├── tuples.py
    ├── sets.py
    ├── dictionaries.py
    └── functions.py

- [ ] Python project folder created

---

# 11. 📝 Create Your First Python File

Create:

    hello.py

Write:

    print("Hello, Python")

Save the file.

- [ ] `hello.py` created
- [ ] Python code written
- [ ] File saved

---

# 12. ▶️ Run Your First Python Program

Open Command Prompt or PowerShell.

Move to your project folder.

Example:

    cd Python_Programs

Run:

    python hello.py

You can also use:

    py hello.py

- [ ] Project folder opened in terminal
- [ ] `hello.py` executed successfully

---

# 13. 🧑‍💻 Install Visual Studio Code

Visual Studio Code is a popular code editor for programming.

Official website:

https://code.visualstudio.com/

### 📷 Photo

![VS Code Download](images/vscode-download.png)

- [ ] VS Code downloaded
- [ ] VS Code installed

---

# 14. 🐍 Install Python Extension in VS Code

Open VS Code.

Go to:

**Extensions**

Search for:

    Python

Install the Python extension provided by Microsoft.

### 📷 Photo

![Python Extension](images/vscode-python-extension.png)

- [ ] Python extension found
- [ ] Python extension installed

---

# 15. 🔧 Select Python Interpreter

Open your Python project in VS Code.

Select the Python interpreter that you want to use.

### 📷 Photo

![Select Python Interpreter](images/select-python-interpreter.png)

- [ ] Python interpreter selected

---

# 16. 📂 Open Python Project in VS Code

Open your:

    Python_Programs

folder in VS Code.

Your Python files should appear in the Explorer panel.

- [ ] Project folder opened in VS Code
- [ ] Python files visible

---

# 17. ▶️ Run Python Code in VS Code

Open:

    hello.py

Write:

    print("Hello, Python")

Run the program using the Run button or the integrated terminal.

- [ ] Program opened in VS Code
- [ ] Program executed successfully

---

# 18. 🌱 Create a Virtual Environment

A virtual environment keeps project packages separated.

Create one using:

    python -m venv .venv

This creates:

    .venv/

inside the project.

- [ ] Virtual environment created

---

# 19. ▶️ Activate Virtual Environment

For Windows Command Prompt:

    .venv\Scripts\activate

For Windows PowerShell:

    .\.venv\Scripts\Activate.ps1

After activation, the environment name may appear in the terminal.

- [ ] Virtual environment activated

---

# 20. 📦 Install a Python Package

General command:

    python -m pip install package_name

Example:

    python -m pip install requests

- [ ] Python package installation understood

---

# 21. 🔢 Install NumPy

NumPy is required later in the Python Programming syllabus.

Install NumPy:

    python -m pip install numpy

- [ ] NumPy installed

---

# 22. 🧪 Test NumPy

Create:

    numpy_test.py

Write:

    import numpy as np

    numbers = np.array([10, 20, 30, 40, 50])

    print(numbers)

Run:

    python numpy_test.py

- [ ] `numpy_test.py` created
- [ ] NumPy imported successfully
- [ ] NumPy program executed

---

# 23. 🔍 Check NumPy Version

Run:

    python -c "import numpy; print(numpy.__version__)"

- [ ] NumPy version displayed

---

# 24. 🛠️ Useful Python Commands

## Check Python Version

    python --version

## Check Windows Python Launcher

    py --version

## Start Python

    python

## Exit Python

    exit()

## Check pip

    python -m pip --version

## Upgrade pip

    python -m pip install --upgrade pip

## Install a Package

    python -m pip install package_name

## Install NumPy

    python -m pip install numpy

## Create Virtual Environment

    python -m venv .venv

---

# 25. 🚨 Troubleshooting

## Problem 1: `python` command is not working

Try:

    py --version

If Python is installed but the command does not work, check the installation and PATH configuration.

- [ ] Python command problem resolved

---

## Problem 2: pip is not working

Try:

    python -m pip --version

Instead of:

    pip --version

- [ ] pip problem resolved

---

## Problem 3: NumPy cannot be imported

Install NumPy:

    python -m pip install numpy

Then test:

    python -c "import numpy; print(numpy.__version__)"

- [ ] NumPy problem resolved

---

## Problem 4: VS Code cannot find Python

Check that Python is installed.

Then select the correct Python interpreter in VS Code.

- [ ] Correct Python interpreter selected

---

# 26. 📚 Complete Setup Checklist

## Python Installation

- [ ] Official Python website opened
- [ ] Python downloaded
- [ ] Python installed
- [ ] PATH checked
- [ ] Python version verified

## pip

- [ ] pip verified
- [ ] pip upgraded

## VS Code

- [ ] VS Code installed
- [ ] Python extension installed
- [ ] Python interpreter selected
- [ ] Python project opened

## First Program

- [ ] `hello.py` created
- [ ] Code written
- [ ] Program executed successfully

## Virtual Environment

- [ ] `.venv` created
- [ ] `.venv` activated

## NumPy

- [ ] NumPy installed
- [ ] NumPy imported
- [ ] NumPy test program executed
- [ ] NumPy version checked

---

# 27. 🏁 Complete Setup Flow

    Python.org
         ↓
    Download Python
         ↓
    Install Python
         ↓
    Check PATH
         ↓
    python --version
         ↓
    Check pip
         ↓
    Install VS Code
         ↓
    Install Python Extension
         ↓
    Select Python Interpreter
         ↓
    Create Project
         ↓
    Create hello.py
         ↓
    Run Program
         ↓
    Create .venv
         ↓
    Activate .venv
         ↓
    Install NumPy
         ↓
    Test NumPy
         ↓
    Python Setup Complete

---

# 28. 🌐 Official Resources

## Python

https://www.python.org/

## Python Downloads

https://www.python.org/downloads/

## Python Windows Documentation

https://docs.python.org/3/using/windows.html

## Visual Studio Code

https://code.visualstudio.com/

---

# 29. 🎓 Final Checklist

When all boxes are checked, the basic Python development environment is ready.

- [ ] Python installed
- [ ] Python version verified
- [ ] pip working
- [ ] VS Code installed
- [ ] Python Extension installed
- [ ] Python Interpreter selected
- [ ] Python project created
- [ ] First Python program created
- [ ] First Python program executed
- [ ] Virtual Environment created
- [ ] Virtual Environment activated
- [ ] NumPy installed
- [ ] NumPy tested

---

# 🐍 Python Setup Complete

**Congratulations! Your Python development environment is ready.**

You can now start learning and practicing Python programming.