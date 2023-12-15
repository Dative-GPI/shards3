(If you locally need the loader with auto-imports :
- npm install -w @dative-gpi/foundation-shared-loader
- cd src/shared/foundation-shared-loader
- python importsGenerator.py
- npm run build -w @dative-gpi/foundation-shared-loader)

This project use npm workspaces, so in order to launch the storybook you have to :
- npm install (in the root folder)
- npm run storybook -w @dative-gpi/foundation-shared-storybook
