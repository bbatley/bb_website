import re
import os
from dataclasses import dataclass

rooms = ["Living", "Dining", "Kitchen", "Outside", "Basement",
         "Bed1", "Bed2", "Bed3", "Bed4", "Bath1",
         "Bath2", "Bath3", "Garage", "Laundry", "Office/Den", "Other"]

@dataclass
class Listing:
    address: str
    available: bool
    beds: int
    baths: float



directory_names = {"903%20Spring":Listing("903 Spring Street, Ann Arbor, MI 48103", True, 1, 1)
                   , "102%20Green%20Way":Listing("102 Green Way Dr, Combined Locks, WI 54113", False, 1, 1)
                   , "104%20Green%20Way":Listing("104 Green Way Dr, Combined Locks, WI 54113", False, 1, 1)
                   , "5335%20Brookview":Listing("5335 Brookview Dr, Appleton, WI 54913", False, 1, 1)
                   , "5337%20Brookview":Listing("5337 Brookview Dr, Appleton, WI 54913", False, 1, 1)
                   , "N1841%20Reimer":Listing("N1841 Reimer Ct, Greenville, WI 54942", False, 1, 1)
                   , "N1843%20Reimer":Listing("N1843 Reimer Ct, Greenville, WI 54942", False, 1, 1)
                   , "1749%20Marissa":Listing("1749 Marissa Ct, De Pere, WI 54115", True, 1, 1)
                   , "1751%20Marissa":Listing("1751 Marissa Ct, De Pere, WI 54115", False, 1, 1)
                   , "2707A%204th":Listing("2707 W. 4th St, Apt. A, Appleton, WI 54914", False, 1, 1)
                   , "2707B%204th":Listing("2707 W. 4th St, Apt. B, Appleton, WI 54914", False, 1, 1)
                   , "2707C%204th":Listing("2707 W. 4th St, Apt. C, Appleton, WI 54914", False, 1, 1)
                   , "2707D%204th":Listing("2707 W. 4th St, Apt. D, Appleton, WI 54914", False, 1, 1)
                   , "2711A%204th":Listing("2711 W. 4th St, Apt. A, Appleton, WI 54914", False, 1, 1)
                   , "2711B%204th":Listing("2711 W. 4th St, Apt. B, Appleton, WI 54914", False, 1, 1)
                   , "2711C%204th":Listing("2711 W. 4th St, Apt. C, Appleton, WI 54914", False, 1, 1)
                   , "2711D%204th":Listing("2711 W. 4th St, Apt. D, Appleton, WI 54914", False, 1, 1)
                   , "2715A%204th":Listing("2715 W. 4th St, Apt. A, Appleton, WI 54914", False, 1, 1)
                   , "2715B%204th":Listing("2715 W. 4th St, Apt. B, Appleton, WI 54914", False, 1, 1)
                   , "2715C%204th":Listing("2715 W. 4th St, Apt. C, Appleton, WI 54914", False, 1, 1)
                   , "2715D%204th":Listing("2715 W. 4th St, Apt. D, Appleton, WI 54914", False, 1, 1)
                   , "500%20E%20Alice":Listing("500 E. Alice St, Appleton, WI 54911", False, 1, 1)
                   , "1708%20E%20Main":Listing("1708 E. Main St, Little Chute, WI 54140", False, 1, 1)
                   , "1710%20E%20Main":Listing("1710 E. Main St, Little Chute, WI 54140", False, 1, 1)
                   , "1716%20E%20Main":Listing("1716 E. Main St, Little Chute, WI 54140", False, 1, 1)
                   , "1718%20E%20Main":Listing("1718 E. Main St, Little Chute, WI 54140", False, 1, 1)
                   , "1783%20Burgoyne":Listing("1783 Burgoyne Ct, De Pere, WI 54115", False, 1, 1)
                   , "1785%20Burgoyne":Listing("1785 Burgoyne Ct, De Pere, WI 54115", False, 1, 1)
                   , "2021%20Autumn":Listing("2021 Autumn Ln, Kaukauna, WI 54130", False, 1, 1)
                   , "2023%20Autumn":Listing("2023 Autumn Ln, Kaukauna, WI 54130", False, 1, 1)
                   , "2701%20Haas":Listing("2701 Haas Rd, Kaukauna, WI 54130", False, 1, 1)
                   , "2703%20Haas":Listing("2703 Haas Rd, Kaukauna, WI 54130", False, 1, 1)
                   }

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


def copy_lines_before_marker(input_filename, output_filename, marker="START4231", rmln = True):
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

        if rmln:
            outfile.write("// **DONT REMOVE LINE** START4231\n\n")
        else:
            outfile.write("        <!-- **DONT REMOVE LINE** START4231 -->\n\n")

def calc_file_names(output_filename, case, addr, out_listing_file):
    directory_name = "photos/" + case + "/"
    if not os.path.exists(directory_name):
        return
    with open(output_filename, 'a') as outfile:
        outfile.write("    case(\"" + case + "\"):\n")
        outfile.write("        addressDisplay.textContent = '" + addr + "';\n")
        for room in rooms:
            if (os.path.exists(directory_name + room)) and (os.listdir(directory_name + room)):
                for file in os.listdir(directory_name + room):
                    if(file.endswith('.DS_Store')):
                        os.remove(os.path.join(directory_name + room, file))

        for room in rooms:
            if (os.path.exists(directory_name + room)) and (os.listdir(directory_name + room)):
                outfile.write("        link = document.querySelector('option[rmknd=\"" + room + "\"]');\n")
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
                if not  file == '.DS_Store':
                    new_image_name = directory_name + file + "\""


        if new_image_name != "":
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

def remove_buttons(output_filename, dir):
    directory_name = "photos/" + dir.replace("%20", " ") + "/"
    empty = True 
    with open(output_filename, 'a') as outfile:
        for room in rooms:
            if (os.path.exists(directory_name + room)) and (os.listdir(directory_name + room)):
                empty = False 

        if empty:
            outfile.write("link = document.querySelector('a[tp=\"" + dir + "\"]');\n")
            outfile.write("link.style.display = 'none';\n")

def copy_lines_between_markers(input_filename, output_filename, marker="START4231", end_marker="END4231"):
    marker_pattern = re.compile(r'.*' + marker + r'.*')
    end_marker_pattern = re.compile(r'.*' + end_marker + r'.*')
    markFound = False
    with open(input_filename, 'r') as infile, open(output_filename, 'a') as outfile:
        for line in infile:
            if marker_pattern.match(line):  # Check if we've reached the marker
                markFound = True
            elif end_marker_pattern.match(line):
                outfile.write("\n        <!-- **DONT REMOVE LINE** END4231 -->\n")
                return
            elif markFound == True:
                outfile.write(line)  # Copy the line to the output file
        
def write_lines_between_markers(output_filename):
    markFound = False
    with open(output_filename, 'a') as outfile:
        outfile.write("            <option value=\"not-selected\">Select</option>\n")
        for dir, addr in directory_names.items():
            if(addr.available):
                outfile.write(f"            <option value=\"{addr.address}\">{addr.address}</option>\n")
        outfile.write("\n        <!-- **DONT REMOVE LINE** END4231 -->\n")


if __name__ == "__main__":
    # Example usage:
    input_filename = "imageGalleryScript.js"   # Replace with your actual input filename
    output_filename = "tmp.js"  # Replace with your desired output filename
    copy_lines_before_marker(input_filename, output_filename) 

    with open(output_filename, 'a') as outfile:
        outfile.write("var link = document.querySelector('option[rmknd=\"Basement\"]');\n")
        for room in rooms:
            outfile.write("link = document.querySelector('option[rmknd=\""+ room +"\"]');\n")
            outfile.write("link.style.display = 'none';\n")

        outfile.write("switch(imageDirectory) {\n")

    #TODO: Here add all the homes
    for dir, addr in directory_names.items():
        calc_file_names(output_filename, dir.replace("%20", " "), addr.address, "listings.html")

    with open(output_filename, 'a') as outfile:
        outfile.write("}\n")
        outfile.write("// **DONT REMOVE LINE** END4231\n")

    copy_lines_after_marker(input_filename, output_filename, "END4231")

    os.replace(output_filename, input_filename)
    

    # Update listing and index script to remove photo buttons

    input_filename = "listingScript.js"
    copy_lines_before_marker(input_filename, output_filename) 
    with open(output_filename, 'a') as outfile:
        outfile.write("var link = document.querySelector('a[tp=\"tmp\"]');\n")
    for dir, addr in directory_names.items():
        remove_buttons(output_filename, dir)
    os.replace(output_filename, input_filename)

    input_filename = "indexScript.js"
    copy_lines_before_marker(input_filename, output_filename) 
    with open(output_filename, 'a') as outfile:
        outfile.write("var link = document.querySelector('a[tp=\"tmp\"]');\n")
    for dir, addr in directory_names.items():
        remove_buttons(output_filename, dir)
    os.replace(output_filename, input_filename)


    # Copy listings to featured properties
    input_filename = "index.html"
    output_filename = "tmp.html"
    copy_lines_before_marker(input_filename, output_filename, rmln=False) 

    copy_lines_between_markers("listings.html", output_filename, "START4231", "END4231")

    input_filename = "index.html"
    copy_lines_after_marker(input_filename, output_filename, "END4231")
    
    os.replace(output_filename, input_filename)


    # Copy listings into forms
    input_filename = "contact.html"
    copy_lines_before_marker(input_filename, output_filename, rmln=False) 
    write_lines_between_markers(output_filename)
    copy_lines_after_marker(input_filename, output_filename, "END4231")

    os.replace(output_filename, input_filename)