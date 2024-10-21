# WHOIS Domain Checker

A simple browser extension that allows users to check WHOIS information and IP addresses for the current active tab's domain. The extension automatically fetches the domain name from the active tab and provides detailed WHOIS information in a popup.
Features

   
    Automatically fetches the domain from the current active tab.
    Displays WHOIS information such as the registrar, creation date, and expiration date.
    Shows the IP address of the domain.
    Supports both light and dark themes based on the user's system preferences.
    Easy to use with a clean, user-friendly interface.
    
# Screenshots
![oie_qRlxxwUDHFWv](https://github.com/user-attachments/assets/acc6dcc9-be49-4ebc-80d3-00d578c21525)


# Installation For Developers

To load this extension temporarily in your browser for testing and development:
Chrome/Edge

    Download or clone this repository.
    Open Chrome and navigate to chrome://extensions/.
    Enable Developer mode (top-right corner).
    Click Load unpacked and select the project folder.
    The extension will now be available in your browser toolbar.

# Firefox

    Download or clone this repository.
    Open Firefox and navigate to about:debugging#/runtime/this-firefox.
    Click on Load Temporary Add-on.
    Select the manifest.json file from the project folder.
    The extension will now be available in your browser toolbar.

# Usage

    After installing the extension, click on the extension icon in the browser toolbar.
    The extension will automatically fetch the domain name of the active tab.
    WHOIS information and the IP address of the domain will be displayed in the popup.
    If you want to check a different domain, manually enter the domain in the input field and click the Check WHOIS button.

# Technologies Used

    HTML/CSS/JavaScript: For the user interface and functionality.
    WHOIS API: Fetches domain registration details.
    IP Lookup: Retrieves the domain's IP address.
