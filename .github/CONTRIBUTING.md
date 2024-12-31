# Contributing

## Translating

You can help with translating whether it be fixing an error or adding a new language.

Translations can be accessed and edited through our [Crowdin project](https://crowdin.com/project/classroom-dark-mode). There you can:

- Translate or proofread content
- Vote or edit on existing translations
- Open discussion topics

## Setup

If you want to contribute, you need to first [fork the repository](https://github.com/RyanLua/ClassroomDarkMode/fork) or learn how to at "[Forking a repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository)."

After forking to your own GitHub account, run the following steps to get started:

```sh
# Clone your fork
git clone https://github.com/RyanLua/ClassroomDarkMode.git # Replace `RyanLua` with the username of your fork

cd ClassroomDarkMode

# Install dependencies
npm install
```

## Testing

All code relating to the extension can be found under the `src` directory. There you can make changes to the extension's code. When you are finished with your changes you are required to load your extension and test it for any bugs or issues.

To load the extension into your browser:

1. Navigate to your extension's page (`edge://extensions` for Edge)
1. Enable "Developer mode"
1. Click "Load unpacked" and select the `src` directory
1. You now should see the extension under **Installed extensions > From other sources**

When have reviewed all changed code and checked for any bugs or issues you can create a [new pull request](https://github.com/RyanLua/ClassroomDarkMode/compare) to get your changes merged.
