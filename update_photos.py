import re
import os
from dataclasses import dataclass

rooms = ["Living", "Dining", "Kitchen", "Outside", "Basement",
         "Bed1", "Bed2", "Bed3", "Bed4", "Bath1",
         "Bath2", "Bath3", "Garage", "Laundry", "Office/Den", "Other"]

@dataclass
class Listing:
    address: str
    available: str
    featured: str
    beds: int
    baths: float
    rent: str


#                    folder name        |               Address (+ indicates new line)        |  Available | featured  | Beds  | Baths |   Rent
directory_names = {  "903%20Spring":      Listing("903 Spring Street+ Ann Arbor, MI 48103",         "no",      "yes",      3,      1,    "$--/month")
                   , "102%20Green%20Way": Listing("102 Green Way Dr+ Combined Locks, WI 54113",     "no",      "no",      2,      1.5,    "$--/month")
                   , "104%20Green%20Way": Listing("104 Green Way Dr+ Combined Locks, WI 54113",     "no",      "no",      2,      1.5,    "$--/month")
                   , "5335%20Brookview":  Listing("5335 Brookview Dr+ Appleton, WI 54913",          "yes",      "yes",      3,      2.5,    "$--/month")
                   , "5337%20Brookview":  Listing("5337 Brookview Dr+ Appleton, WI 54913",          "no",      "no",      3,      2.5,    "$--/month")
                   , "N1841%20Reimer":    Listing("N1841 Reimer Ct+ Greenville, WI 54942",          "no",      "no",      3,      2,    "$--/month")
                   , "N1843%20Reimer":    Listing("N1843 Reimer Ct+ Greenville, WI 54942",          "no",      "no",      3,      2,    "$--/month")
                   , "1749%20Marissa":    Listing("1749 Marissa Ct+ De Pere, WI 54115",             "yes",      "no",      3,      2,    "$--/month")
                   , "1751%20Marissa":    Listing("1751 Marissa Ct+ De Pere, WI 54115",             "yes",      "no",      3,      2,    "$--/month")
                   , "2707A%204th":       Listing("2707 W. 4th St, Apt. A+ Appleton, WI 54914",     "no",      "no",      3,      1.5,    "$--/month")
                   , "2707B%204th":       Listing("2707 W. 4th St, Apt. B+ Appleton, WI 54914",     "no",      "no",      3,      1.5,    "$--/month")
                   , "2707C%204th":       Listing("2707 W. 4th St, Apt. C+ Appleton, WI 54914",     "no",      "no",      3,      1.5,    "$--/month")
                   , "2707D%204th":       Listing("2707 W. 4th St, Apt. D+ Appleton, WI 54914",     "yes",      "no",      3,      1.5,    "$--/month")
                   , "2711A%204th":       Listing("2711 W. 4th St, Apt. A+ Appleton, WI 54914",     "no",      "no",      3,      1.5,    "$--/month")
                   , "2711B%204th":       Listing("2711 W. 4th St, Apt. B+ Appleton, WI 54914",     "no",      "no",      3,      1.5,    "$--/month")
                   , "2711C%204th":       Listing("2711 W. 4th St, Apt. C+ Appleton, WI 54914",     "no",      "no",      3,      1.5,    "$--/month")
                   , "2711D%204th":       Listing("2711 W. 4th St, Apt. D+ Appleton, WI 54914",     "no",      "no",      3,      1.5,    "$--/month")
                   , "2715A%204th":       Listing("2715 W. 4th St, Apt. A+ Appleton, WI 54914",     "no",      "no",      3,      1.5,    "$--/month")
                   , "2715B%204th":       Listing("2715 W. 4th St, Apt. B+ Appleton, WI 54914",     "no",      "no",      3,      1.5,    "$--/month")
                   , "2715C%204th":       Listing("2715 W. 4th St, Apt. C+ Appleton, WI 54914",     "no",      "no",      3,      1.5,    "$--/month")
                   , "2715D%204th":       Listing("2715 W. 4th St, Apt. D+ Appleton, WI 54914",     "yes",      "no",      3,      1.5,    "$--/month")
                   , "500%20E%20Alice":   Listing("500 E. Alice St+ Appleton, WI 54911",            "yes",      "yes",      3,      2,    "$--/month")
                   , "1708%20E%20Main":   Listing("1708 E. Main St+ Little Chute, WI 54140",        "yes",      "no",      2,      2,    "$--/month")
                   , "1710%20E%20Main":   Listing("1710 E. Main St+ Little Chute, WI 54140",        "yes",      "no",      2,      2,    "$--/month")
                   , "1716%20E%20Main":   Listing("1716 E. Main St+ Little Chute, WI 54140",        "no",      "no",      2,      2,    "$--/month")
                   , "1718%20E%20Main":   Listing("1718 E. Main St+ Little Chute, WI 54140",        "no",      "no",      2,      2,    "$--/month")
                   , "1783%20Burgoyne":   Listing("1783 Burgoyne Ct+ De Pere, WI 54115",            "no",      "no",      4,      2,    "$--/month")
                   , "1785%20Burgoyne":   Listing("1785 Burgoyne Ct+ De Pere, WI 54115",            "no",      "no",      4,      2,    "$--/month")
                   , "2021%20Autumn":     Listing("2021 Autumn Ln+ Kaukauna, WI 54130",             "yes",      "no",      2,      1,    "$--/month")
                   , "2023%20Autumn":     Listing("2023 Autumn Ln+ Kaukauna, WI 54130",             "yes",      "no",      2,      1,    "$--/month")
                   , "2701%20Haas":       Listing("2701 Haas Rd+ Kaukauna, WI 54130",               "no",      "no",      3,      1.5,    "$--/month")
                   , "2703%20Haas":       Listing("2703 Haas Rd+ Kaukauna, WI 54130",               "no",      "no",      3,      1.5,    "$--/month")
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
    """  Get all file names for the the photos in the photo directory
        and format them for the image gallery script.
        In addition update out_listing_file (listing.html) default photo

    Args:
        output_filename (str): script to write to
        case (str): photo directory name
        addr (str): Full Address of the property
        out_listing_file (str): File path to update featured photo
    """
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

def remove_buttons(output_filename, dir):
    """Disable buttons for photos that don't exist

    Args:
        dir : Photo directory
    """
    directory_name = "photos/" + dir.replace("%20", " ") + "/"
    empty = True 
    with open(output_filename, 'a') as outfile:
        for room in rooms:
            if (os.path.exists(directory_name + room)) and (os.listdir(directory_name + room)):
                empty = False 

        if empty:
            outfile.write("link = document.querySelector('a[tp=\"" + dir + "\"]');\n")
            outfile.write("if (link) link.style.display = 'none';\n")

def copy_lines_between_markers(input_filename, output_filename, marker="START4231", end_marker="END4231"):
    """ Copies lines between two markers from the start of an input file up to a marker line into a new file.
    """
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
    """ If the current property is marked available add it to 
    the select dropdown in the contact form.

    Args:
        output_filename (file name): file to write to
    """
    markFound = False
    with open(output_filename, 'a') as outfile:
        outfile.write("            <option value=\"not-selected\">Select</option>\n")
        for dir, addr in directory_names.items():
            if(addr.available == "yes"):
                outfile.write(f"            <option value=\"{addr.address.replace('+', ',')}\">{addr.address.replace('+', ',')}</option>\n")
        outfile.write("\n        <!-- **DONT REMOVE LINE** END4231 -->\n")

def build_property(input_filename, output_filename, dir, property):
    """" Create a property for the listings.html file
    
    Args:
        input_filename (str): file to read from (listings.html)
        output_filename (str): tmp file to write to
        dir (str): photo directory name
        property (Listing): Listing object with property info
    """
    with open(output_filename, 'a') as outfile:
        outfile.write(f"                <div class=\"property-card\" avail=\"{property.available}\" featured=\"{property.featured}\" bedroom={property.beds} bath={property.baths}>\n")

        new_image_name = "none.jpg"
        if os.path.exists('photos/' + dir.replace("%20", " ")):
            for file in os.listdir('photos/' + dir.replace("%20", " ")):
                if not os.path.isdir('photos/' + dir.replace("%20", " ") + '/' + file):
                    if not  file == '.DS_Store':
                        new_image_name = file
        outfile.write(f"                    <img src=\"photos/{dir.replace('%20', ' ')}/{new_image_name}\" alt=\"Property {dir.replace('%20', ' ')}\">\n")

        parts = property.address.split('+')
        outfile.write(f"                    <h3 class=\"street\">{parts[0]}</h3>\n")
        outfile.write(f"                    <h3 class=\"city\">{parts[1]}</h3>\n")
        outfile.write(f"                    <span class=\"beds\"></span>\n")
        outfile.write(f"                    <span class=\"baths\"></span>\n")
        outfile.write(f"                    <p class=\"available\">Currently Unavailable</p>\n")
        outfile.write(f"                    <p class=\"price\">{property.rent}</p>\n")
        outfile.write(f"                    <a href=\"photos/image_gallery.html?imageDirectory={dir}&room=All\" tp=\"{dir}\" class=\"photo_button\">Photos</a>\n")
        outfile.write(f"                    <span class=\"between\"></span>\n")
        outfile.write(f"                    <a href=\"info.html?property={dir}\" class=\"photo_button\">Info</a>\n")
        outfile.write("                </div>")
        outfile.write("\n")

if __name__ == "__main__":
    # Copy start of image gallery script and default room dropdowns to off
    input_filename = "imageGalleryScript.js"
    output_filename = "tmp.js"
    copy_lines_before_marker(input_filename, output_filename) 
    with open(output_filename, 'a') as outfile:
        outfile.write("var link = document.querySelector('option[rmknd=\"Basement\"]');\n")
        for room in rooms:
            outfile.write("link = document.querySelector('option[rmknd=\""+ room +"\"]');\n")
            outfile.write("if (link) link.style.display = 'none';\n")
        outfile.write("switch(imageDirectory) {\n")

    # Update image Gallery script with updated photo paths and copy rest of file
    # Todo remove listings.html and update description
    for dir, addr in directory_names.items():
        calc_file_names(output_filename, dir.replace("%20", " "), addr.address.replace('+', ','), "listings.html")
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


    # Create properties for listings here
    input_filename = "listings.html"
    output_filename = "tmp.html"
    copy_lines_before_marker(input_filename, output_filename, rmln=False) 
    for dir, addr in directory_names.items():
        build_property(input_filename, output_filename, dir, addr)
    with open(output_filename, 'a') as outfile:
        outfile.write("\n        <!-- **DONT REMOVE LINE** END4231 -->\n")
    copy_lines_after_marker(input_filename, output_filename, "END4231")
    os.replace(output_filename, input_filename)

    # Copy listings to featured properties
    # input_filename = "index.html"
    # output_filename = "tmp.html"
    # copy_lines_before_marker(input_filename, output_filename, rmln=False) 
    # copy_lines_between_markers("listings.html", output_filename, "START4231", "END4231")
    # copy_lines_after_marker(input_filename, output_filename, "END4231")
    # os.replace(output_filename, input_filename)
    
    # Create properties for homepage (first do available then featured properties)
    input_filename = "index.html"
    output_filename = "tmp.html"
    copy_lines_before_marker(input_filename, output_filename, rmln=False) 
    for dir, addr in directory_names.items():
        if(addr.available == "yes"):
            build_property(input_filename, output_filename, dir, addr)

    for dir, addr in directory_names.items():
        if(addr.available == "no" and addr.featured == "yes"):
            build_property(input_filename, output_filename, dir, addr)

    with open(output_filename, 'a') as outfile:
        outfile.write("\n        <!-- **DONT REMOVE LINE** END4231 -->\n")
    copy_lines_after_marker(input_filename, output_filename, "END4231")
    os.replace(output_filename, input_filename)


    # Update contact form with available properties
    input_filename = "contact.html"
    copy_lines_before_marker(input_filename, output_filename, rmln=False) 
    write_lines_between_markers(output_filename)
    copy_lines_after_marker(input_filename, output_filename, "END4231")
    os.replace(output_filename, input_filename)