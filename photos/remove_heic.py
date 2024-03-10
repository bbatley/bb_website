import os
def convert_and_delete_heics(directory):
    print('HERE')
    for filename in os.listdir(directory):
        filepath = os.path.join(directory, filename)
        print(filepath)
        if os.path.isfile(filepath):
            if filename.endswith('.heic') or filename.endswith('.HEIC'):
                filepath = os.path.join(directory, filename)
                # convert_heic_to_jpg(filename)
                os.remove(filepath)

        elif os.path.isdir(filepath):
            convert_and_delete_heics(filepath)

convert_and_delete_heics('.')