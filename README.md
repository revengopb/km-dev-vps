# KM DEV Cloud Terminal (GitHub Pages Demo)

This project gives you a browser-based **simulated terminal UI** with a `root@kmdev:~#` prompt and sample responses for commands such as `apt update`, `apt install neofetch -y`, `neofetch`, `free -h`, `df -h`, `lscpu`, and `uname -a`.

## Publish at `https://km-dev-vps.github.io`

1. Create a **public** GitHub repository named exactly `km-dev-vps.github.io` under the GitHub account `km-dev-vps`.
2. Upload the contents of this folder to the repository root (upload `index.html`, `style.css`, `app.js`, `README.md`, and `.nojekyll`; keep the `assets` folder).
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
5. Wait for GitHub Pages to publish the site.

## Important: demo, not a real VPS

GitHub Pages only hosts static website files. The terminal in this project is a safe simulation: it does not execute shell commands, install packages, expose a real root shell, or connect to GitHub-hosted VPS compute. The displayed CPU/RAM/disk/kernel values are examples.

When you later have a Linux host, a separate secured backend/agent will be needed. The browser must connect to that backend over an authenticated encrypted connection. Do not put SSH private keys, root passwords, API tokens, or other secrets in this public repository or frontend JavaScript.

For genuine full-root Linux VPS functionality, use a suitable VM host (for example KVM/libvirt) and provision each guest with its own OS and resources. systemd, cloudflared, Docker, and Pterodactyl/Wings support depend on the guest OS and host networking.
