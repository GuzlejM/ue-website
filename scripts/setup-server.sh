#!/bin/bash

# Update system packages
echo "Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Node.js and npm
echo "Installing Node.js and npm..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install Yarn
echo "Installing Yarn..."
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install -y yarn

# Install PM2
echo "Installing PM2..."
sudo npm install -g pm2

# Install NGINX
echo "Installing NGINX..."
sudo apt install -y nginx

# Install Certbot for SSL
echo "Installing Certbot..."
sudo apt install -y certbot python3-certbot-nginx

# Configure firewall
echo "Configuring firewall..."
sudo apt install -y ufw
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

# Create website directory
echo "Creating website directory..."
sudo mkdir -p /var/www/ue-website
sudo chown -R $USER:$USER /var/www/ue-website

# Copy NGINX configuration
echo "Setting up NGINX configuration..."
sudo cp nginx/ue-website.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/ue-website.conf /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Test NGINX configuration
echo "Testing NGINX configuration..."
sudo nginx -t

# Restart NGINX
echo "Restarting NGINX..."
sudo systemctl restart nginx

echo "Server setup complete!"
echo "Next steps:"
echo "1. Update the NGINX configuration with your domain name"
echo "2. Run Certbot to obtain SSL certificate:"
echo "   sudo certbot --nginx -d your-domain.com -d www.your-domain.com" 