#!/bin/bash

# Set the target file size (adjust as needed)
target_size="1000k"

# Check if jpegoptim is installed
if ! command -v jpegoptim &> /dev/null; then
    echo "jpegoptim could not be found. Please install it"
    exit 1 
fi

# Iterate through all .jpg or .jpeg files in the current directory
for file in *.jpg *.jpeg *.JPG; do
    # Skip if the file doesn't exist
    if [[ ! -f "$file" ]]; then
        continue
    fi

    jpegoptim --size 2000k $file

    echo "$file optimized"
done
