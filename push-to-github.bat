@echo off
set "PATH=C:\Users\HP\AppData\Local\Programs\MinGit\cmd;C:\Users\HP\AppData\Local\Programs\MinGit\mingw64\bin;C:\Users\HP\AppData\Local\Microsoft\WinGet\Packages\OpenJS.NodeJS.LTS_Microsoft.Winget.Source_8wekyb3d8bbwe\node-v24.20.0-win-x64;%PATH%"
echo ============================================================
echo   MediSync Solution - Pushing Masterpiece to GitHub
echo   Repository: https://github.com/ranaahmadmaqsood/medisync-solution
echo ============================================================
echo.
git push -u origin main --force
echo.
echo ============================================================
if %ERRORLEVEL% EQU 0 (
    echo   SUCCESS! All files have been pushed to GitHub.
) else (
    echo   Push encountered an error. Please check authentication.
)
echo ============================================================
pause
