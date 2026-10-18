import os 

_py_version = str(os.getenv("PYTHON_VERSION"))
_working_directory = str(os.getenv("WORKING_DIRECTORY"))
_environment = str(os.getenv("ENVIRONMENT"))


def check_python_version(_py_version):
    print(f"Python Version Set for App : {_py_version}")

def check_app_directory(_working_directory):
    print(f"App running in directory : {_working_directory}")

def check_app_environment(_environment):
    print(f"App running in : {_environment} environment")

print(f"====== Checking Python App Version Set For App ======")
check_python_version(_py_version)

print(f"====== Checking Python App Working Directory Set For App ======")
check_app_directory(_working_directory)

print(f"====== Checking Python App Environment Set For App ======")
check_app_environment(_environment)