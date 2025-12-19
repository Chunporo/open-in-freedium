# Open in Freedium

A Firefox browser extension that allows you to quickly open Medium articles and other links in Freedium with a simple right-click.

## Features

- **Right-click context menu**: Easily access "Open in Freedium" from any link or page
- **Automatic URL prefixing**: Automatically prepends `https://freedium-mirror.cfd/` to the selected URL
- **Works on links and pages**: Right-click on links or directly on page content
- **Simple and lightweight**: Minimal permissions, no tracking, just works

## Installation

### From Source

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/open-in-freedium.git
   cd open-in-freedium
   ```

2. Open Firefox and navigate to `about:debugging`

3. Click "This Firefox" in the left sidebar

4. Click "Load Temporary Add-on..."

5. Select the `manifest.json` file from the cloned repository

6. The extension will be loaded and ready to use!

### From Firefox Add-ons (AMO)

_Coming soon - submit for review to add to Firefox Add-ons marketplace_

## Usage

1. **For links**: Right-click on any link (especially Medium article links) and select "Open in Freedium"
2. **For current page**: Right-click anywhere on a page and select "Open in Freedium" to open the current page in Freedium

The extension will automatically open the URL with the Freedium mirror prefix in a new tab.

Example:
- Original URL: `https://medium.com/@user/article-123`
- Opens as: `https://freedium-mirror.cfd/https://medium.com/@user/article-123`

## Development

### Project Structure

```
open-in-freedium/
├── assets/
│   ├── icon16.png
│   └── icon48.jpeg
├── background.js      # Background script handling context menu
├── manifest.json      # Extension manifest
└── README.md
```

### Permissions

- `contextMenus`: Required to create the right-click context menu
- `tabs`: Required to open new tabs with the Freedium URL

## License

MIT License - see LICENSE file for details

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Issues

If you encounter any issues or have suggestions, please open an issue on GitHub.

