# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.18

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Disable VCS-based implicit rules.
% : %,v


# Disable VCS-based implicit rules.
% : RCS/%


# Disable VCS-based implicit rules.
% : RCS/%,v


# Disable VCS-based implicit rules.
% : SCCS/s.%


# Disable VCS-based implicit rules.
% : s.%


.SUFFIXES: .hpux_make_needs_suffix_list


# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /var/scratch/workspace/Python/knn_cmake

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /var/scratch/workspace/Python/knn_cmake/build

# Utility rule file for knn_swig_py_swig_compilation.

# Include the progress variables for this target.
include wrapping/python/CMakeFiles/knn_swig_py_swig_compilation.dir/progress.make

wrapping/python/CMakeFiles/knn_swig_py_swig_compilation: wrapping/python/CMakeFiles/knn_swig_py.dir/knn_swigPYTHON.stamp


wrapping/python/CMakeFiles/knn_swig_py.dir/knn_swigPYTHON.stamp: ../wrapping/python/knn_swig.i
wrapping/python/CMakeFiles/knn_swig_py.dir/knn_swigPYTHON.stamp: ../wrapping/python/knn_swig.i
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold --progress-dir=/var/scratch/workspace/Python/knn_cmake/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Swig compile knn_swig.i for python"
	cd /var/scratch/workspace/Python/knn_cmake/build/wrapping/python && /usr/bin/cmake -E make_directory /var/scratch/workspace/Python/knn_cmake/build/python/knn_swig /var/scratch/workspace/Python/knn_cmake/build/python/knn_swig
	cd /var/scratch/workspace/Python/knn_cmake/build/wrapping/python && /usr/bin/cmake -E touch /var/scratch/workspace/Python/knn_cmake/build/wrapping/python/CMakeFiles/knn_swig_py.dir/knn_swigPYTHON.stamp
	cd /var/scratch/workspace/Python/knn_cmake/build/wrapping/python && /usr/bin/cmake -E env SWIG_LIB=/usr/share/swig3.0 /usr/bin/swig3.0 -python -DSWIGWORDSIZE64 -py3 -DPY3 -I/var/scratch/workspace/Python/knn_cmake/wrapping/python/../include -I/usr/include/python3.6m -I/var/scratch/workspace/Python/knn_cmake/include -outdir /var/scratch/workspace/Python/knn_cmake/build/python/knn_swig -c++ -module knn_swig_py -interface _knn_swig_py -o /var/scratch/workspace/Python/knn_cmake/build/python/knn_swig/knn_swigPYTHON_wrap.cxx /var/scratch/workspace/Python/knn_cmake/wrapping/python/knn_swig.i

knn_swig_py_swig_compilation: wrapping/python/CMakeFiles/knn_swig_py_swig_compilation
knn_swig_py_swig_compilation: wrapping/python/CMakeFiles/knn_swig_py.dir/knn_swigPYTHON.stamp
knn_swig_py_swig_compilation: wrapping/python/CMakeFiles/knn_swig_py_swig_compilation.dir/build.make

.PHONY : knn_swig_py_swig_compilation

# Rule to build all files generated by this target.
wrapping/python/CMakeFiles/knn_swig_py_swig_compilation.dir/build: knn_swig_py_swig_compilation

.PHONY : wrapping/python/CMakeFiles/knn_swig_py_swig_compilation.dir/build

wrapping/python/CMakeFiles/knn_swig_py_swig_compilation.dir/clean:
	cd /var/scratch/workspace/Python/knn_cmake/build/wrapping/python && $(CMAKE_COMMAND) -P CMakeFiles/knn_swig_py_swig_compilation.dir/cmake_clean.cmake
.PHONY : wrapping/python/CMakeFiles/knn_swig_py_swig_compilation.dir/clean

wrapping/python/CMakeFiles/knn_swig_py_swig_compilation.dir/depend:
	cd /var/scratch/workspace/Python/knn_cmake/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /var/scratch/workspace/Python/knn_cmake /var/scratch/workspace/Python/knn_cmake/wrapping/python /var/scratch/workspace/Python/knn_cmake/build /var/scratch/workspace/Python/knn_cmake/build/wrapping/python /var/scratch/workspace/Python/knn_cmake/build/wrapping/python/CMakeFiles/knn_swig_py_swig_compilation.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : wrapping/python/CMakeFiles/knn_swig_py_swig_compilation.dir/depend

