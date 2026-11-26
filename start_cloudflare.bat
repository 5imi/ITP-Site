@echo off
REM Pornire rapida server local + tunel Cloudflare pentru previzualizare ITP-Site
start "ITP-Site HTTP" /min cmd /c "python -m http.server 8091 --bind 127.0.0.1 --directory "%~dp0""
"%~dp0tools\cloudflared.exe" tunnel --url http://127.0.0.1:8091 --no-autoupdate
