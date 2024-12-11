SnippetSleuth

SnippetSleuth is a Google Chrome extension that detects programming languages and technical domains of code snippets that users interact with. Whether a user copies code or views it, SnippetSleuth provides detailed insights into the language and environment.

Features

Programming Language Detection: Identifies the programming language (e.g., Python, JavaScript, HTML) of copied code snippets using heuristic analysis.

Code Copy Tracking: Monitors when users copy code snippets and logs the activity.

Activity Logs: Records metadata such as:

Programming language

Source URL

Timestamp

Code content

User Interface: Provides a simple popup interface to view logs of interactions with detailed information.

Lightweight and Secure: Works efficiently with minimal permissions and ensures user privacy.

How It Works

Content Script: Monitors user actions and detects copied code snippets.

Language Detection Logic: Analyzes the copied code using syntax patterns to identify the programming language.

Background Service: Manages the storage of logs and processes messages between the content script and the UI.

Popup Dashboard: Displays the logged activities in a user-friendly format.

Technologies Used

Chrome Extensions API

JavaScript: Content script and logic for detecting languages and logging activities

HTML & CSS: Popup interface for viewing activity logs

Storage API: Stores user activity data locally

Installation

Clone the repository:

git clone https://github.com/srujanchidarla/SnippetSleuth.git

Open Google Chrome and navigate to chrome://extensions/.

Enable Developer Mode (toggle on the top right corner).

Click Load unpacked and select the cloned project folder.

The extension will now be installed and ready to use.

Usage

Interact with any webpage that contains code.

Copy a snippet of code.

Open the SnippetSleuth popup to view the detected programming language, source URL, and timestamp of your interaction.

Contributing

Contributions are welcome! Please follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature-branch-name).

Make your changes and commit them (git commit -m 'Add feature or fix bug').

Push the changes to your fork (git push origin feature-branch-name).

Open a pull request to the main branch of this repository.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

For questions or support, contact the repository owner at contact@srujanchidarla.com.
