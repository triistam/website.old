#!/usr/bin/env bash

# Functions
copyFile () {
    if [ -f $1 ]; then
        cp $1 ~/.hackathon/ && echo "$1 muvaffaqiyatli ko'chirib o'tkazildi!"
    else
        echo "$1 mavjud emas..."
    fi
}

# Open the home directory
cd ~

# Create a directory for the 
# hackathon results
mkdir .hackathon && cd .hackathon || echo "Hackathon papka yaratib bo'madi"

# Saving the lsblk file
lsblk > lsblk.txt || echo "lsblk commandasi mavjud emas"
pacman -Qe > aur.txt || "pacman commandasi mavjud emas"
pacman -Q > pacman.txt || "pacman commandasi mavjud emas"

# If file exists, copy it to current directory
copyFile /etc/fstab
copyFile /etc/vconsole.conf
copyFile /etc/locale.conf
copyFile /etc/hosts
copyFile /etc/hostname
copyFile ~/.bashrc
copyFile ~/.zshrc
copyFile ~/.vimrc
copyFile ~/.gitconfig

# Come back to the home directory
cd ~

# Install required packages
sudo pacman -S zip
sudo pacman -S scrot


# Finally, zip the folder and save it 
# on home directory, also delete it
mv .hackathon hackathon
zip -r hackathon.zip hackathon
rm -rf hackathon