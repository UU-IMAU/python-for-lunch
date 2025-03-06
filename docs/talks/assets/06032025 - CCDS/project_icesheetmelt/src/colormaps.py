import numpy as np
import matplotlib as mpl
import matplotlib.pyplot as plt
import cmocean as cmo
from copy import copy


def get_colormaps():
    cmap = {}
    norm = {}

    # Create BMB colormap
    vmax = 100
    vmin = -10
    linthresh = 0.3
    linscale = 0.25
    fracpos = (np.log10(vmax / linthresh) + linscale) / (
        np.log10(vmax / linthresh) + np.log10(-(vmin / linthresh)) + 2 * linscale
    )
    nneg = np.int_((1 - fracpos) * 256)
    colors1 = plt.get_cmap("cmo.dense_r")(np.linspace(0, 1.0, nneg + 1))
    colors2 = plt.get_cmap("gist_heat_r")(np.linspace(0.0, 1, 256 - nneg - 1))
    colors = np.vstack((colors1, colors2))

    #######
    # UFE #
    #######
    # Basal mass balance and related output [m/yr]
    for key in ["BMB", "BMB_inv", "BMB_smooth"]:
        cmap[key] = mpl.colors.LinearSegmentedColormap.from_list("my_colormap", colors)
        norm[key] = mpl.colors.SymLogNorm(linthresh, vmin=vmin, vmax=vmax, linscale=linscale)

    # Ice thickness Hi [m]
    cmap["Hi"] = copy(plt.get_cmap("cmo.ice"))
    norm["Hi"] = mpl.colors.Normalize(vmin=0, vmax=4000, clip=True)

    # Bed height Hb [m]
    cmap["Hb"] = copy(plt.get_cmap("cmo.deep"))
    norm["Hb"] = mpl.colors.Normalize(vmin=-3000, vmax=2000, clip=True)

    # Ice surface height Hs [m]
    cmap["Hs"] = copy(plt.get_cmap("cmo.ice"))
    norm["Hs"] = mpl.colors.Normalize(vmin=0, vmax=1000, clip=True)

    # Absolute surface velocities [m/yr]
    cmap["uabs_surf"] = copy(plt.get_cmap("CMRmap"))
    norm["uabs_surf"] = mpl.colors.LogNorm(vmin=1.0, vmax=2000, clip=True)

    # Basal friction coefficient []
    cmap["basal_friction_coefficient"] = copy(plt.get_cmap("Greens"))
    norm["basal_friction_coefficient"] = mpl.colors.LogNorm(vmin=1, vmax=350e6, clip=True)

    # Till friction angle [deg]
    cmap["till_friction_angle"] = copy(plt.get_cmap("cmo.matter"))
    norm["till_friction_angle"] = mpl.colors.Normalize(vmin=0, vmax=30, clip=True)

    # Region of interest (ROI) mask
    cmap["mask_ROI"] = copy(plt.get_cmap("cmo.deep"))
    norm["mask_ROI"] = mpl.colors.Normalize(vmin=0, vmax=1, clip=True)

    # General mask - note: this cmap is shared with mask variable in laddie
    cmap["mask"] = copy(plt.get_cmap("Greys"))
    norm["mask"] = mpl.colors.Normalize(vmin=0, vmax=10)

    # Pore water fraction
    cmap["pore_water_fraction"] = copy(plt.get_cmap("Greens"))
    norm["pore_water_fraction"] = mpl.colors.Normalize(vmin=0, vmax=1)

    # Grounded fraction
    cmap["fraction_gr"] = copy(plt.get_cmap("cmo.balance"))
    norm["fraction_gr"] = mpl.colors.Normalize(vmin=0, vmax=1)

    # cmap['BMB'] = mpl.colors.LinearSegmentedColormap.from_list('my_colormap', colors)
    # norm['BMB'] = mpl.colors.LinearSegmentedColormap.from_list('my_colormap', colors)

    # cmap['BMB_inv'] = mpl.colors.LinearSegmentedColormap.from_list('my_colormap', colors)
    # norm['BMB_inv'] = mpl.colors.SymLogNorm(linthresh, vmin=vmin, vmax=vmax, linscale=linscale)

    # cmap['BMB_smooth'] = mpl.colors.LinearSegmentedColormap.from_list('my_colormap', colors)
    # norm['BMB_smooth'] = mpl.colors.SymLogNorm(linthresh, vmin=vmin, vmax=vmax, linscale=linscale)

    cmap["SL"] = mpl.colors.LinearSegmentedColormap.from_list("my_colormap", colors)
    norm["SL"] = mpl.colors.SymLogNorm(linthresh, vmin=vmin, vmax=vmax, linscale=linscale)

    cmap["diff"] = copy(plt.get_cmap("cmo.balance"))
    norm["diff"] = mpl.colors.Normalize(vmin=-1e6, vmax=1e6, clip=True)

    ##########
    # LADDIE #
    ##########

    # Melt [m/yr]
    cmap["melt"] = mpl.colors.LinearSegmentedColormap.from_list("my_colormap", colors)
    norm["melt"] = mpl.colors.SymLogNorm(linthresh, vmin=vmin, vmax=vmax, linscale=linscale)

    # Velocity in x-direction (Ut) and in y-direction (Vt) [m/s]
    for key in ["Ut", "Vt"]:
        cmap[key] = copy(plt.get_cmap("cmo.speed"))
        norm[key] = mpl.colors.Normalize(vmin=-1, vmax=1, clip=True)

    # Thickness of the layer [m]
    cmap["D"] = copy(plt.get_cmap("cmo.speed"))
    norm["D"] = mpl.colors.Normalize(vmin=-2, vmax=2, clip=True)

    # Salinity of the layer (psu)
    cmap["S"] = copy(plt.get_cmap("cmo.haline"))
    norm["S"] = mpl.colors.Normalize(vmin=33, vmax=36, clip=True)

    # Temperature of the layer (degC)
    cmap["T"] = copy(plt.get_cmap("cmo.thermal"))
    norm["T"] = mpl.colors.Normalize(vmin=-2, vmax=2, clip=True)

    return cmap, norm
