# YouTube-Video-Downloader

## Overview
YouTube Video Downloader is a Google Chrome Extension that allows users to download YouTube videos directly to their computer at the highest possible quality. This extension provides a quick, free, and efficient way to save YouTube videos for offline viewing.

## Features
- Download YouTube videos with a single click.
- Supports high-quality video downloads.
- User-friendly interface integrated directly into the YouTube site.

## Technologies Used
- JavaScript
- Python
- Flask
- Manifest V3

## Installation
1. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/JSilvagnoli/YouTube-Video-Downloader.git
2. Navigate to the project directory
   ```cd YouTube-Video-Downloader```
3. Install Flask using pip
```pip install Flask```
4. Install PyTube using pip:
```pip install pytube```
5. Navigate to chrome://extensions/ in your Chrome browser.
6. Enable "Developer mode" by toggling the switch in the top right corner.
7. Click "Load unpacked" and select the directory where you cloned the repository.
8. The extension should now be installed and active in your browser.
   
## Usage
1. Ensure you have a folder named `Downloaded YouTube Videos` in your `D:` drive. If not, create this folder.
   - Alternatively, you can change the download location in the `ytDownloader.py` file to a folder of your choice:
     ```python
     yd.download('your/desired/path')
     ```
2. Navigate to any YouTube video.
3. Click on the download button added by the extension.
4. The video will be downloaded in the highest available quality.
5. The downloaded video will be saved to the specified folder.

## Contributing
1. Fork the repository.
2. Create a new branch: git checkout -b my-feature-branch
3. Make your changes and commit them: git commit -m 'Add some feature'
4. Push to the branch: git push origin my-feature-branch
5. Submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
