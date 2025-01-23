# Python for lunch!

`PFL` is a space where researchers and students at IMAU exchange ideas and expertise on Python & discuss best practices in [open science](https://en.wikipedia.org/wiki/Open_science).

Every two weeks we host seminar-style meetings at IMAU (room 607) where anybody can present a particular Python package or workflow. Following the presentation there is room for general discussion, and we encourage users to help each other out with specific problems. Everybody can be a teacher!

## Agenda

| #   | date       | topic                            | speaker(s)          |
| --- | ---------- | -------------------------------- | ------------------- |
| 18  | 2020.11.17 | Performance - C-bindings         | Christian           |
| 18  | 2020.11.03 | Performance - data access & Dask | Christian           |
| 18  | 2020.10.20 | Performance - time & benchmark   | Christian           |
| 18  | 2020.02.19 | graph. user interface use case   | Heiko               |
| 17  | 2020.02.05 | Matplotlib colormaps             | Reint               |
| 16  | 2019.11.27 | teaching with Python             | Maarten             |
| 15  | 2019.11.20 | git                              | Stan                |
| 14  | 2019.10.16 | Numpy and vectorization          | Leo                 |
| 13  | 2019.10.02 | Julia                            | Oscar van der Heide |
| 12  | 2019.09.18 | Exceptions, lists, recap 2018    | Mikael, Leo         |
| 11  | 2019.05.15 | Pandas                           | Jasper              |
| 10  | 2019.05.01 | Defensive programming            | Erik                |
| 9   | 2019.04.17 | General discussion               | -                   |
| 8   | 2019.04.03 | Matplotlib + cartopy             | Anne, Leo           |
| 7   | 2019.03.27 | Matplotlib basics                | Mikael, Leo         |
| 6   | 2019.03.06 | Advanced OO programming          | Tjebbe, Philippe    |
| 5   | 2019.02.20 | Object oriented programming      | Tjebbe, Philippe    |
| 4   | 2019.02.06 | Xarray                           | Leo, André          |
| 3   | 2019.01.23 | Example workflows using Jupyter  | Anneke, Leo         |
| 2   | 2018.12.12 | Jupyter notebooks                | André               |
| 1   | 2018.12.28 | virtual environments             | Daniele             |
| 0   | 2018.11.14 | introduction                     | PFL team            |

## Overview of possible topics

| Category      | Package or topic                                                                                                                                                                                                                   |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NetCDF        | [Xarray](http://xarray.pydata.org/), Iris, HDF5, netCDF4 (Aarnout)                                                                                                                                                                 |
| Regridding    | [xesmf](https://xesmf.readthedocs.io/en/latest/)                                                                                                                                                                                   |
| Data analysis | [pandas](http://pandas.pydata.org/), [aospy](https://aospy.readthedocs.io/en/stable/), [xgcm](https://xgcm.readthedocs.io/en/latest/), [salem](https://salem.readthedocs.io/en/stable/), [ESMValTool](https://www.esmvaltool.org/) |
| Plotting      | Matplotlib, [Cartopy](https://scitools.org.uk/cartopy/docs/latest/index.html), basemap (André)                                                                                                                                     |
| Science       | SciPy (Christian), machine learning (Mikael)                                                                                                                                                                                       |
| Computing     | Fast code (Christian / vectorization, cython / Fortran (Leo), ctypes (Christian), Numba (Christian), Dask (Christian), parallel computing                                                                                          |
| Programming   | readability / PEP / best practices, defensive programming and testing (Erik), OO programming (Tjebbe)                                                                                                                              |
| Workflow      | [Jupyter Lab](https://jupyterlab.readthedocs.io/en/stable/), git, virtual environments                                                                                                                                             |
| Education     | [nbgrader](https://nbgrader.readthedocs.io/en/stable/), [Sympy](https://www.sympy.org)                                                                                                                                             |

## Background

Many IMAU folks currently use Python for parts of their workflow or have expressed interest in doing so. Yet the suite of packages available for geophysical science is quite extensive and therefore it can be hard to pick the right one. On top of that, learning a new language or developing a new workflow from scratch can be quite time-consuming. It makes you wonder, if only there was a fun and efficient way of mastering new Python skills… Enter `Python for Lunch!`.

`Python for lunch!` is an informal seminar series held every two weeks centered around Python. Each session has a focus which can be a package, a workflow, an aspect of programming... you name it. Next to that we intend to make room for a users-helping-users kind of thing, both online and offline, so we can maximally benefit from each others knowledge. The overall goal being to spend less time on re-inventing the wheel and more on doing cool science!

## External links

### Open science communities

- [Pangeo](http://pangeo.io/) is a community promoting open, reproducible, and scalable science. They curate a list of [Awesome Open Atmospheric, Ocean, and Climate Science](https://github.com/pangeo-data/awesome-open-climate-science)
- [NumFocus](https://numfocus.org/) is a nonprofit dedicated to supporting the open source scientific computing community.
- [EDU-SIG](https://www.python.org/community/sigs/current/edu-sig/), Python in Education

### Python

- [Jupyter Lab](https://jupyterlab.readthedocs.io/en/stable/)
- [PEP 8 Style guide](https://pep8.org/)

### Interesting material elsewhere

- [Earth and Environmental Data Science course book](https://earth-env-data-science.github.io/intro), by Ryan Abernathey
- [Python for geosciences](https://github.com/koldunovn/python_for_geosciences), by Nikolay Koldunov
- [A gallery of interesting Jupyter notebooks](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks), by the Jupyter project
- [Lectures on scientific computing](https://github.com/jrjohansson/scientific-python-lectures), by J.R. Johansson
- Leo's [IMAU lunchtalk](https://github.com/lvankampenhout/Lunchtalk-Python-2017) back in 2017
- [Scipy 2019 tutorials and talks](https://www.scipy2019.scipy.org/tutorial-participant-instructions) + [Videos](https://www.youtube.com/playlist?list=PLYx7XA2nY5GcDQblpQ_M1V3PQPoLWiDAC)

### Try out the notebooks on mybinder.org

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/UU-IMAU/Python-for-lunch-Notebooks/master?urlpath=lab)
