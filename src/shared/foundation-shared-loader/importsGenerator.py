import os
import json

PROJECTS =  {
        "foundation-shared-components": "../foundation-shared-components/components",
        "foundation-admin-components": "../../admin/foundation-admin-components/components",
        "foundation-core-components": "../../core/foundation-core-components/components",
        "foundation-extension-components": "../../extension/foundation-extension-components/components",
        # Ajoutez d'autres projets ici si nécessaire
    }

def find_vue_files(project_name, directory):
    components_dict = {}
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".vue"):
                component_path = os.path.relpath(os.path.join(root, file), start=directory)
                full_relative_path = os.path.join("@dative-gpi", project_name, component_path)
                file_name_without_extension = os.path.splitext(file)[0]
                components_dict[file_name_without_extension] = {
                    "from": full_relative_path
                }
    return components_dict

def main():
    # Crée le dossier 'mapping' s'il n'existe pas dans le répertoire courant du script
    mapping_directory = "./plugin/mapping"
    os.makedirs(mapping_directory, exist_ok=True)

    for project_name, project_root in PROJECTS.items():
        components = find_vue_files(project_name, project_root)
        data = {
            "components": components,
            "directives": []
        }
        output_file = os.path.join(mapping_directory, f"{project_name}-imports-map.json")
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print(f"Vue structure file for '{project_name}' created at {output_file}")

if __name__ == "__main__":
    main()