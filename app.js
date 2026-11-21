const terminal = document.getElementById('terminal');
const output = document.getElementById('output');
const form = document.getElementById('command-form');
const input = document.getElementById('command');
let neofetchInstalled = false;

function printLine(text, className='result') {
  const div = document.createElement('div');
  div.className = `line ${className}`;
  div.textContent = text;
  output.appendChild(div);
  terminal.scrollTop = terminal.scrollHeight;
}
function runDemo(raw) {
  const cmd = raw.trim();
  if (!cmd) return;
  printLine(`root@kmdev:~# ${cmd}`, 'oldprompt');
  const c = cmd.toLowerCase().replace(/\s+/g,' ');
  if (c === 'help') {
    printLine('Available simulated commands:');
    printLine('  apt update                 Refresh demo package lists');
    printLine('  apt install neofetch -y    Install demo neofetch package');
    printLine('  neofetch                   Display demo system information');
    printLine('  free -h                    Show demo memory information');
    printLine('  df -h                      Show demo disk information');
    printLine('  lscpu                      Show demo CPU information');
    printLine('  uname -a                   Show demo kernel information');
    printLine('  whoami                     Print current demo user');
    printLine('  clear                      Clear terminal');
  } else if (c === 'apt update') {
    printLine('Demo package lists: reading package indexes...');
    printLine('Hit:1 demo://kmdev-packages stable InRelease');
    printLine('Reading package lists... Done');
    printLine('Demo only: no package manager was run.');
  } else if (c === 'apt install neofetch -y') {
    neofetchInstalled = true;
    printLine('Reading package lists... Done');
    printLine('Building dependency tree... Done');
    printLine('The following NEW package will be installed: neofetch');
    printLine('Setting up neofetch (demo-version) ... Done');
    printLine('Demo package marked as installed. Nothing was installed on a real machine.');
  } else if (c === 'neofetch') {
    if (!neofetchInstalled) {
      printLine('neofetch: command not found. Try: apt install neofetch -y', 'error');
    } else {
      printLine('       .-/+oossssoo+/-.
    `:+ssssssssssssssssss+:`
  -+ssssssssssssssssssyyssss+-
.ossssssssssssssssssdMMMNysssso.
KM DEV@kmdev
----------------
OS: Ubuntu 24.04 LTS (SIMULATED)
Host: KM DEV Cloud Demo
Kernel: 6.x-demo
Uptime: Demo session
Packages: 124 (demo)
Shell: bash (simulated)
CPU: Demo CPU (2 vCPU)
Memory: 2.0 GiB / 4.0 GiB (demo)
Disk: 12G / 40G (demo)

NOTICE: These are sample values, not real host specifications.');
    }
  } else if (c === 'free -h') {
    printLine('               total        used        free');
    printLine('Mem:           4.0Gi       1.2Gi       2.8Gi');
    printLine('Swap:          0B          0B          0B');
    printLine('Sample output only; not measured from a real VPS.');
  } else if (c === 'df -h') {
    printLine('Filesystem      Size  Used Avail Use% Mounted on');
    printLine('/dev/vda1        40G   12G   28G  30% /');
    printLine('Sample output only; not measured from a real VPS.');
  } else if (c === 'lscpu') {
    printLine('Architecture:             x86_64 (demo)');
    printLine('CPU(s):                   2 (demo)');
    printLine('Model name:               KM DEV Demo CPU');
    printLine('Sample output only; not measured from a real VPS.');
  } else if (c === 'uname -a') {
    printLine('Linux kmdev 6.x-demo #1 SMP x86_64 GNU/Linux');
  } else if (c === 'whoami') {
    printLine('root (demo identity only; no actual root privileges)');
  } else if (c === 'clear') {
    output.replaceChildren();
  } else {
    printLine(`bash: ${cmd.split(' ')[0]}: command not found in demo shell. Type help.`, 'error');
  }
}
form.addEventListener('submit', event => {
  event.preventDefault();
  const value = input.value;
  input.value = '';
  runDemo(value);
});
document.getElementById('clear').addEventListener('click', () => output.replaceChildren());
document.querySelectorAll('[data-cmd]').forEach(button => {
  button.addEventListener('click', () => {
    runDemo(button.dataset.cmd);
    input.focus();
  });
});
