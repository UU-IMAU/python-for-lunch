# 2025-09-04 Technical Difficulties Round Table - Summary

- No general sense on how to optimise Python code
- "Don't use for loops" - but not really knowing what the alternative would be
    - numba decorators
    - Olivier: Has worked with numba before
- Submitting batch jobs
    - How to estimate how much time it would take to run your code?
        - Just be conservative and overestimate (it would only be used in scheduling)
    - Not really clear how it works... Submitting jobs
    - VScode integration to SLURM is unclear
    - We can have a lunch talk on SLURM (and make sure that Michael K. is there so that he can hear our thoughts on SLURM and Lorenz).

- JupyterHub on Lorenz?
    - Not really worth it since people can easily just use VScode

- if you open up a folder on Lorenz, how can you open other folders?
    - Cmd+O: Open any file on your computer in vscode (regardless of in project)
    - Open multiple folders in project workspace: https://stackoverflow.com/a/45125674
- Don't know how to use AI coding tools in vscode, is it paid?
    - GitHub Pro is available for all academics for free
    - Saves time copy pasting things. Sometimes its not always accurate.
- More advanced git: How can we resolve merge conflicts?
    - There's a software carpentry course for git, with a section on collaboration ([link](https://swcarpentry.github.io/git-novice/08-collab.html)).
- Xarray and performance isn't really clear...
    - How to choose chunk size?
    - Why is dask (e.g., doing a spatial average for each file) slower than doing a for loop through each file?

Final takeaways:

- VScode running in an interactive session would be useful on an IMAU level (and not just a Parcels level)
- We should have a lunch talk on SLURM
- An xarray talk series would be useful (also looping in performance discussions)
