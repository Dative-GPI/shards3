import os
import json

PROJECT = "@dative-gpi/foundation-core-components"

def find_vue_files(directory):
    """
    Parcourt récursivement le répertoire donné et retourne un dictionnaire de fichiers .vue
    """
    components_dict = {}

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".vue"):
                # Récupérer le chemin relatif du fichier par rapport au répertoire racine du projet
                full_relative_path = os.path.relpath(os.path.join(root, file), project_root)
                
                file_name_without_extension = os.path.splitext(file)[0]
                components_dict[file_name_without_extension] = {
                    "from": PROJECT + '/' + full_relative_path
                }

    return components_dict

def main():
    global project_root
    project_root = "."  # Vous pouvez remplacer '.' par le chemin absolu ou relatif de votre projet
    components = find_vue_files(os.path.join(project_root, "components"))

    data = {
        "components": components,
        "directives": []
    }

    with open("importMap.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

if __name__ == "__main__":
    main()
