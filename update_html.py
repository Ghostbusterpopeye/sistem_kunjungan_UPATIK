import re

with open('c:\\laragon\\www\\PROJECT_WPPL\\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

if 'fonts.googleapis.com' not in content:
    content = content.replace('<link rel="stylesheet" href="style.css">', 
                              '<link rel="stylesheet" href="style.css">\n    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">')

content = re.sub(r'<li(.*?)onclick="navigateTo\(\'home\'\)">Beranda</li>', r'<li\g<1>onclick="navigateTo(\'home\')"><i class="fas fa-home"></i> Beranda</li>', content)
content = re.sub(r'<li(.*?)onclick="navigateTo\(\'layanan\'\)">Layanan</li>', r'<li\g<1>onclick="navigateTo(\'layanan\')"><i class="fas fa-concierge-bell"></i> Layanan</li>', content)
content = re.sub(r'<li(.*?)onclick="navigateTo\(\'riwayat\'\)">Riwayat</li>', r'<li\g<1>onclick="navigateTo(\'riwayat\')"><i class="fas fa-history"></i> Riwayat</li>', content)
content = re.sub(r'<li(.*?)onclick="navigateTo\(\'login\'\)">Login</li>', r'<li\g<1>onclick="navigateTo(\'login\')"><i class="fas fa-sign-in-alt"></i> Login</li>', content)
content = re.sub(r'<li>Riwayat</li>', r'<li onclick="navigateTo(\'riwayat\')"><i class="fas fa-history"></i> Riwayat</li>', content)

content = content.replace('<div class="upa-avatar-placeholder"></div>', '<div class="upa-avatar-placeholder"><i class="fas fa-laptop-code"></i></div>')

with open('c:\\laragon\\www\\PROJECT_WPPL\\index.html', 'w', encoding='utf-8') as f:
    f.write(content)
