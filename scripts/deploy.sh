#!/bin/bash

# Copy NGINX config
sudo cp nginx/ue-website.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/ue-website.conf /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl restart nginx

# Install dependencies and build
yarn install
yarn build

# Start with PM2
pm2 start npm --name "ue-website" -- start

# Save PM2 process list and environment
echo "Saving PM2 process list..."
pm2 save

# Setup PM2 to start on system boot
echo "Setting up PM2 startup..."
pm2 startup

echo "Deployment complete!" 
