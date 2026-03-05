# Installing Pixi

A simple guide to install Pixi and create a basic project.

---

## Install Pixi

[https://pixi.prefix.dev/latest/installation/](https://pixi.prefix.dev/latest/installation/)


### macOS and Linux

```bash
curl -fsSL https://pixi.sh/install.sh
```


## Create a folder

```bash
mkdir my-project
cd my-project
```
Create a folder and go into the folder

## Initialize pixi

```bash
pixi init
```
This creates a new Pixi project in the current folder.

## Add Python and Packages

Add python:
```bash
pixi add python
```
Add a specific Python version:
```bash
pixi add python=3.11
```
Add additional packages:
```bash
pixi add numpy pandas
```

## Project Files

Pixi manages two important files:

- pixi.toml – project configuration and dependency declarations

- pixi.lock – exact resolved versions for reproducibility


## Create and Activate the Environment

Create and activate the environment defined in pixi.toml:

```bash
pixi shell
```

## Reproducible Dependencies (Time-Based)

To ensure packages are no newer than a certain date, use a dated channel snapshot in pixi.toml.

```toml
# in your pixi.toml
exclude-newer = "2023-02-01"
```

## Update the Environment

After changing pixi.toml:

```bash
pixi install
```
