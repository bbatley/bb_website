import re
import os

rooms = ["Living", "Dining", "Kitchen", "Outside", "Basement",
         "Bed1", "Bed2", "Bed3", "Bed4", "Bath1",
         "Bath2", "Bath3", "Garage", "Laundry", "Office/Den", "Other"]

def copy_lines_after_marker(input_filename, output_filename, marker="START4231"):
    """
    Copies lines from the start of an input file up to a marker line into a new file.

    Args:
        input_filename (str): The name of the input file.
        output_filename (str): The name of the output file.
        marker (str): The line that marks the end of the section to be copied.
    """
    marker_pattern = re.compile(r'.*' + marker + r'.*')
    markFound = False
    with open(input_filename, 'r') as infile, open(output_filename, 'a') as outfile:
        for line in infile:
            if marker_pattern.match(line):  # Check if we've reached the marker
                markFound = True
            elif markFound == True:
                outfile.write(line)  # Copy the line to the output file


def copy_lines_before_marker(input_filename, output_filename, marker="START4231"):
    """
    Copies lines from the start of an input file up to a marker line into a new file.

    Args:
        input_filename (str): The name of the input file.
        output_filename (str): The name of the output file.
        marker (str): The line that marks the end of the section to be copied.
    """
    marker_pattern = re.compile(r'.*' + marker + r'.*')

    with open(input_filename, 'r') as infile, open(output_filename, 'w') as outfile:
        for line in infile:
            if marker_pattern.match(line):  # Check if we've reached the marker
                break  # Stop copying
            outfile.write(line)  # Copy the line to the output file

        outfile.write("// **DONT REMOVE LINE** START4231\n\n")

def calc_file_names(output_filename, directory_name, case, addr, out_listing_file):
    with open(output_filename, 'a') as outfile:
        outfile.write("    case(\"" + case + "\"):\n")
        outfile.write("        addressDisplay.textContent = '" + addr + "';\n")
        for room in rooms:
            if (os.path.exists(directory_name + room)) and (os.listdir(directory_name + room)):
                outfile.write("        link = document.querySelector('a[rmknd=\"" + room + "\"]');\n")
                outfile.write("        link.style.display = 'inline'\n")

        outfile.write("        switch(room){\n")

        # Special case all
        outfile.write("            case 'All':\n")
        for room in rooms:
            if (os.path.exists(directory_name + room)):
                for file in os.listdir(directory_name + room):
                    outfile.write("                images.push(`${imageDirectory}/" +room+ "/" + file + "`);\n")
        outfile.write("                break;\n")

        # All other cases
        for room in rooms:
            outfile.write("            case '" + room + "':\n")
            if (os.path.exists(directory_name + room)):
                for file in os.listdir(directory_name + room):
                    outfile.write("                images.push(`${imageDirectory}/" +room+ "/" + file + "`);\n")
            outfile.write("                break;\n")

        outfile.write("        }\n")
        outfile.write("        break;\n")

        # Now update listing with header file
        reg_pattern = ""
        for char in directory_name:
            if char == "/":
                reg_pattern += "\\" + char
            else:
                reg_pattern += char
        new_image_name = ""
        for file in os.listdir(directory_name):
            if not os.path.isdir(directory_name + file):
                new_image_name = directory_name + file + "\""

        pattern = reg_pattern + r'(.*?)(\")'
        with open(out_listing_file, 'r') as file:
            file_contents = file.read()

        updated_contents = re.sub(
            pattern, 
            new_image_name, 
            file_contents
        )

        with open(out_listing_file, 'w') as file:
            file.write(updated_contents)

if __name__ == "__main__":
    # Example usage:
    input_filename = "script_swiper.js"   # Replace with your actual input filename
    output_filename = "tmp.js"  # Replace with your desired output filename
    copy_lines_before_marker(input_filename, output_filename) 

    with open(output_filename, 'a') as outfile:
        outfile.write("var link = document.querySelector('a[rmknd=\"Basement\"]');\n")
        for room in rooms:
            outfile.write("link = document.querySelector('a[rmknd=\""+ room +"\"]');\n")
            outfile.write("link.style.display = 'none';\n")

        outfile.write("switch(imageDirectory) {\n")

    calc_file_names(output_filename, "photos/1751 Marissa/", "1751 Marissa", "1751 Marissa Ct, De Pere, WI 54115", "listings.html")

    with open(output_filename, 'a') as outfile:
        outfile.write("}\n")
        outfile.write("// **DONT REMOVE LINE** END4231\n")

    copy_lines_after_marker(input_filename, output_filename, "END4231")

    os.replace(output_filename, input_filename)