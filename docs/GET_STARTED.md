# This is how you do it

Barking docs seldom byte as the proverb goes.
Tertier makes it easy to get started with your documentation
site. Just follow these simple steps.

## The Directory

Have a directory. Any directory. Like `docs`.
Make sure it's version controlled. Using Git for now.
Organize the files as you like. Tertier seldom expects
specific filenames or structures, but for now here's a few:

- `OVERVIEW.md` - The main overview of your docs site.
- `NEWS.md` - The news you want to share with the world. Changelogs are treated separately.
- `GET_STARTED.md` - This getting started guide.

## Run Tertier

Let Tertier, the Doguhorse run.

```bash
npx tertier
```

Tertier will do the discovery for you by default.
If it finds a `docs` directory, it will use that, and assume
the project root to be the parent directory.
If it finds itself in a `docs` directory, nested any levels
deep, it will assume the project root to be the ancestor
directory above `docs`.
You can override these defaults by providing
`--docs-dir` and `--project-root` options.

After discovery, Tertier will build the dogumentation site.
A static site will be generated in the docs directory,
unless overridden by the `--out-dir` option.

## Preview the Site

Preview and host the site as you wish.
For a quick preview, you can simply:

```bash
npx serve docs
```

Open your browser at `http://localhost:5000` (or the port
indicated in the terminal) and enjoy your terrific
dogumentation site!
