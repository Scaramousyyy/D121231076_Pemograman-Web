@echo off
cd C:\Users\ASUS\VSCode\Codes\PemWeb\P1_Data Diri
set /p message="footer update"
git add .
git commit -m "%message%"
git push origin main
pause