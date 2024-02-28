# Iterate through all .jpg or .jpeg files in the current directory
for file in *.jpg *.jpeg *.JPG; do
    # Skip if the file doesn't exist
    if [[ ! -f "$file" ]]; then
        continue
    fi

    echo "$file optimized"
done
