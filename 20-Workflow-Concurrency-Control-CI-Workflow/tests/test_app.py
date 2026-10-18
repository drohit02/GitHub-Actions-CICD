import pytest
from app import check_python_version,check_app_directory,check_app_environment

def test_python_version(capsys):
    check_python_version("3,12")
    assert "3.12" in capsys.readouterr().out

def test_app_directory(capsys):
    check_app_directory("/app")
    assert "/app" in capsys.readouterr().out


def test_app_environment(capsys):
    check_app_environment("production")
    assert "production" in capsys.readouterr().out
