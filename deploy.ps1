# ==============================================================================
# One-Click Deployment Script for Raheel Ahmed Khan Portfolio to GitHub Pages
# ==============================================================================

Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "   Deploying Raheel Ahmed Khan Portfolio to GitHub Pages" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan

# Step 1: Prompt for GitHub Username / Repo
$username = Read-Host "Enter your GitHub Username (e.g. raheelkhanofficial7)"
$repoName = Read-Host "Enter your GitHub Repository Name (e.g. portfolio or raheelkhanofficial7.github.io)"

if ([string]::IsNullOrWhiteSpace($username) -or [string]::IsNullOrWhiteSpace($repoName)) {
    Write-Host "Error: Username or Repository name cannot be empty." -ForegroundColor Red
    Exit
}

$repoUrl = "https://github.com/$username/$repoName.git"

Write-Host "`n[1/4] Initializing Git repository..." -ForegroundColor Yellow
git init

Write-Host "[2/4] Staging and committing all portfolio files..." -ForegroundColor Yellow
git add .
git commit -m "Initial commit: Deploy professional GRC & Cybersecurity portfolio"

Write-Host "[3/4] Setting main branch and remote URL: $repoUrl" -ForegroundColor Yellow
git branch -M main
git remote remove origin 2>$null
git remote add origin $repoUrl

Write-Host "[4/4] Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host "`n================================================================" -ForegroundColor Green
Write-Host " SUCCESS! Files pushed to GitHub repository." -ForegroundColor Green
Write-Host " Next step: In your GitHub repo, go to Settings > Pages." -ForegroundColor Green
Write-Host " Under 'Build and deployment', choose 'GitHub Actions' or 'Deploy from a branch (main)'." -ForegroundColor Green
Write-Host " Your site will be live at: https://$username.github.io/$repoName" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Green
