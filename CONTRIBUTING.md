# Contributing to Nowruz Wiki

First off, thank you for considering contributing to Nowruz Wiki! It's people like you that make this open-source project such a great tool for the community.

## Where do I go from here?

If you've noticed a bug or have a feature request, make sure to check our [Issues](../../issues) to see if someone else has already created an issue for it. If not, go ahead and [make one](../../issues/new).

## Setting up your environment

To get started, simply fork this repository, clone it locally, and run:

```bash
npm install
npm run dev
```

The application should now be running on `http://localhost:3000`.

## Submitting a Pull Request

1. **Fork the repository** and clone it locally.
2. **Create a new branch** out of the `main` branch. (`git checkout -b my-new-feature`)
3. **Make your changes** and commit them. Follow standard conventions.
4. **Push your branch** to your fork (`git push origin my-new-feature`)
5. **Open a Pull Request** against the `main` branch of this repository (`thekeyvan/nowruz-wiki`).

When opening a Pull Request, our template will guide you to ensure everything is in order. We have continuous integration (CI) tests that run automatically to ensure that `npm run lint` and `npm run build` succeed without errors.

## Code Quality

Please make sure that your code satisfies the project's formatting and linting rules. You can verify this by running:

```bash
npm run lint
```

## Adding content

If you are just adding localized text or content to the wiki, please refer to the `messages/` folder or relevant content directories, and run the dev server to see your translated text in real-time.

Happy coding and Happy Nowruz!
