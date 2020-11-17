from setuptools import find_packages, setup
from setuptools.dist import Distribution

class BinaryDistribution(Distribution):
  def is_pure(self):
    return False
  def has_ext_modules(self):
    return True

from setuptools.command.install import install
class InstallPlatlib(install):
    def finalize_options(self):
        install.finalize_options(self)
        self.install_lib=self.install_platlib

setup(
  name='knn_swig',
  version='1.0',
  author='Mizux',
  author_email='\"Mizux Seiha\" <mizux.dev@gmail.com>',
  url='https://github.com/Mizux/cmake-swig',
  distclass=BinaryDistribution,
  cmdclass={'install': InstallPlatlib},
  packages=find_packages(),
  package_data={
  'knn_swig':['.libs/*'],
  },
  include_package_data=True,
  classifiers=[
  'Development Status :: 5 - Production/Stable',
  'Intended Audience :: Developers',
  'License :: OSI Approved :: Apache Software License',
  'Operating System :: POSIX :: Linux',
  'Operating System :: MacOS :: MacOS X',
  'Operating System :: Microsoft :: Windows',
  'Programming Language :: Python',
  'Programming Language :: C++',
  'Topic :: Scientific/Engineering',
  'Topic :: Software Development :: Libraries :: Python Modules'
  ],
)
