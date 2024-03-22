import os

def rename_images(directory):
    # Get list of files in the directory
    files = os.listdir(directory)
    
    # Sort the files based on their names
    sorted_files = sorted(files)
    
    # Iterate over the sorted files
    for index, filename in enumerate(sorted_files):
        # Check if the file is an image file (you can add more extensions if needed)
        if filename.endswith(('.jpg', '.jpeg', '.png', '.gif')):
            # Formulate the new name based on the order
            new_name = f"image_{index+1}.jpg"  # Change extension if needed
            # Construct the full paths for old and new names
            old_path = os.path.join(directory, filename)
            new_path = os.path.join(directory, new_name)
            # Rename the file
            os.rename(old_path, new_path)
            print(f"Renamed {filename} to {new_name}")

# Directory containing the images
directory_path = r"C:\Users\HP\Documents\GitHub\APES NGO\Images Check\poverty images"

# Call the function to rename images in the directory
rename_images(directory_path)
