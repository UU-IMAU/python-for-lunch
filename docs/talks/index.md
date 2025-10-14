# Talks

Below you can see a list of prior talks (reverse chronological order), as well as upcoming talks, and their resources. You can click [here](https://github.com/UU-IMAU/python-for-lunch/issues?q=is%3Aissue+is%3Aopen+label%3Atalk-suggestion) for a list of all suggested talks.

We try to have a talk every other Thursday at 12pm.

<!--
When adding new entries to the lists, do so in the following format
```
- YYYY-MM-DD | "TALK_TITLE" by PRESENTER
  - [:octicons-video-16: Recording](link to video), [:material-presentation-play: Slideshow](link to slides), [:material-file-document: Supporting material](github_link to folder on main branch), [:material-github: Discussion](github_link to issue/PR)
  - Abstract: ...
```
or, for upcoming talks,
```
- YYYY-MM-DD | "TALK_TITLE" by PRESENTER [(:material-github: Discussion)](github_link to issue/PR)
  - Abstract: ...
```

-->

## Upcoming

_Titles are placeholder._

- 2025-10-16 _No lunch talk_
- 2025-10-30 TBD
- 2025-11-13 TBD
- 2025-11-27 TBD
- 2025-12-11 TBD
- 2025-12-12 - 2026-02-04: Holiday Break
- 2026-02-05 TBD
- 2026-02-19 TBD

## Prior

- **2025-02-25 | "Git and GitHub: A time machine for every research project" by Nick Hodgskin**

    - [:octicons-video-16: Recording](https://youtu.be/QfojYVT01t0), [:material-presentation-play: Slideshow](./assets/20250220%20-%20Git%20and%20GitHub/index.html), [:material-github: Discussion](https://github.com/UU-IMAU/python-for-lunch/issues/11)
    - **Abstract:** Managing versions of a document is easy - just copy, paste, rename (often appending `_old` or `_draft1` to the end), and you're good to go. But what happens when your research involves dozens of inter-related scripts, datasets, and perhaps even collaborators? Suddenly the "copy paste" version management becomes a nightmare. How can we keep track of changes, prevent lost work, and confidently explore new ideas without fear of breaking everything? Enter Git, a version control system that acts like a time machine for your research. In this session, we’ll demystify Git, explaining its core concepts - commits, branches, and repositories - and show how it can be used by independent researchers as well as large teams. We’ll also introduce GitHub - a powerful platform for sharing, reviewing, and archiving research code. The talk is based off the highly polished "Version Control with Git" course from Software Carpentry.

- **2025-03-06 | "Data Science Template: Go from zero to hero with a fully initialised template research project (with sensible defaults) in a minute" by Franka Jesse**

    - [:octicons-video-16: Recording](https://youtu.be/Og9Wrppp_yg), [:material-presentation-play: Slideshow](./assets/20250306%20-%20CCDS/DataScienceTemplate-6March25.pdf), [:material-file-document: CCDS Documentation](https://cookiecutter-data-science.drivendata.org/), [:material-folder: Showcase Example](https://github.com/UU-IMAU/python-for-lunch/blob/main/docs/talks/assets/20250306%20-%20CCDS/project_icesheetmelt), [:material-github: Discussion](https://github.com/UU-IMAU/python-for-lunch/issues/13)

    - **Abstract:** We've all been there – eager to start a new research project, only to end up with a chaotic mess of notebooks like 'final_data_analysis_REALLY_FINAL_version6.ipynb' and data files scattered across our desktop like digital confetti. Fear not! In this lunch talk, I will introduce the "Cookie Cutter Data Science" template (CCDS for short) from Data Driven. It's a quick and painless way to set up your research project in under a minute—with a logical folder structure, sensible defaults, and zero regrets. We will also cover how to integrate it with Git for better version control (and fewer "final" versions). Whether you're handling climate model outputs, wrestling with observational data, or training a machine learning model, this template will save you from future headaches - and impress your collaborators with your beautifully organized project.

- **2025-03-27 | "Python Tidbits: Small Python tips, tricks, and packages you wish you knew about yesterday" by Nick Hodgskin**

    - [:octicons-video-16: Recording](https://youtu.be/X-F0fFFW-wo),[:material-file-document: Notebook](./python-tidbits.ipynb), [:material-download: Notebook Download](https://github.com/UU-IMAU/python-for-lunch/blob/main/docs/talks/python-tidbits.ipynb), [:material-github: Discussion](https://github.com/UU-IMAU/python-for-lunch/issues/21)
    - **Abstract:** Sometimes the most impactful, timesaving features of a programming language are small tips, tricks, and patterns that you pick up along the way. When you finally come across them, you're left thinking "if only I knew about this earlier!". In this talk, we'll go through many of these lesser-known Python tricks - most of which are built directly into the Python language or standard library – to supercharge your Python skills. This talk will be fast paced covering a wide range of features, focusing on "tidbits" that can be explained in a few minutes each.

- **2025-04-17 | "Conda Environments: A tool for reproducible, collaborative, and portable research" by Nick Hodgskin**

    - [:octicons-video-16: Recording](https://youtu.be/KV0zTx_n3o0), [:material-presentation-play: Slideshow](./assets/20250417%20-%20Conda/index.html), [:material-github: Discussion](https://github.com/UU-IMAU/python-for-lunch/issues/26)
    - **Abstract:** Every research project has different requirements. In software this comes in the form of different software dependencies. As we get involved with different research projects, we must manage these different (perhaps conflicting) dependencies - which can be an absolute nightmare if you don't have the right tools! In this talk we go over Conda environments which allow us to isolate dependencies so that we can work in isolated sandboxes for each of our projects. We can easily share these environments, whether it be with collaborators, with readers of your article, or if you want the same environment on your machine and on HPC. Conda environments are one of the key parts of reproducible research. At the end of this talk we also take a brief look at Pixi, a modern alternative to Conda environments which is picking up steam.

- **2025-05-15 | "VS Code: Your All-in-One Scientific Coding Environment" by Willem Kroese**

    - [:octicons-video-16: Recording](https://youtu.be/YRGjb4fEidg), [:material-presentation-play: Slideshow](./assets/20250515%20-%20VSCode/slides.pdf), [:material-github: Discussion](https://github.com/UU-IMAU/python-for-lunch/issues/29)
    - **Abstract:** As scientists, our projects span multiple languages, diverse config/data files, notebooks, local scripting and cloud or cluster work. In this hands-on workshop you’ll discover how Visual Studio Code brings all these workflows under one roof. We’ll kick off with a quick tour of VS Code’s core features (command palette, terminal, workspace management), then dive into essential settings and extensions. You’ll pick up time-saving tips & shortcuts (multi-cursor edits, snippets, Zen Mode), get a peek at remote development over SSH, and watch GitHub Copilot assist your coding with suggestions. Finally, as a real-world bonus, I’ll show you how I turned VS Code into my local LaTeX editor. By the end, you’ll have a personalized toolkit of settings, extensions, and workflows to supercharge your VS Code experience. Bring your laptop if you want to follow along!

- **2025-06-12 | "A Roadmap to the Pangeo Ecosystem" by Nick Hodgskin**

    - [:octicons-video-16: Recording](https://youtu.be/iPh3KxxcAjA), [:material-presentation-play: Slideshow](./assets/20250612%20-%20Pangeo%20Roadmap/index.html), [:material-github: Discussion](https://github.com/UU-IMAU/python-for-lunch/issues/34)
    - **Abstract:** We've all heard the name Pangeo - at a conference, or as a mention from the documentation of one of our tools - but what is it? Why are many climate scientists excited about it? It this talk we explore the Pangeo community and the ecosystem of packages it provides, going over its core mission and why it's needed in the next era of climate science where working with "big data" is becoming the norm. In this talk will give you a roadmap of the different packages and resources available in the Pangeo ecosystem - so that you can identify useful tools to investigate for your workflows and use-cases.

- **2025-09-04 | "Technical Difficulties Round Table"**

    - [:material-file-document: Summary Notes](./assets/20250904%20-%20technical-difficulties-summary.md)
    - **Abstract:** In our scientific workflows, we all encounter technical difficulties. How can I easily transfer data from a server to my computer? How can I easily iterate using a notebook on an HPC? How can I share data in a cross-institution collaboration? We'll use this session as a round table (or maybe "support group") where we can share our frustrations. Let's share our workflows, and voice the difficulties that we encounter so that we can learn from each other. This session will not be recorded so that people can share openly - an anonymised summary will be uploaded after discussion.

- **2025-09-18 | "Programming in Julia: Tools for Dynamical Systems and Climate" by Reyk Börner**

    - [:octicons-video-16: Recording](https://youtu.be/zGWr6hVwUQg), [:material-presentation-play: Slideshow](./assets/20250918%20-%20Julia/slides.pdf), [:material-github: GitHub Repo](https://github.com/reykboerner/juliaforlunch), [:material-github: Discussion](https://github.com/UU-IMAU/python-for-lunch/issues/27)
    - **Abstract:** As a climate scientist, chances are you’re working with some model written in Fortran and analysing data using Python. While Fortran is fast but a bit clunky, Python’s simplicity can come at the cost of running slowly. Julia, an increasingly popular programming language, seeks to offer the best of both worlds by combining speed with an intuitive, Python-like syntax. In this seminar, I’ll share my experience with co-developing my first Julia package (CriticalTransitions.jl) as someone who used to write messy Python scripts. We’ll explore the basic use, pros and cons, and what functionality is out there for dynamical systems analysis and climate modelling.

- [Archived talks](https://github.com/UU-IMAU/Python-for-lunch-Notebooks/blob/main/archived)
