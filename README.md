# monorepo-nx-mf-dyn-modfed with esbuild

## Create from the scratch

1. pnpm dlx create-nx-workspace@latest nx-mf-df --preset=apps
2. cd nx-mf-df
3. pnpm add -D @nx/angular
4. pnpm exec nx g @nx/angular:application \
  --directory=apps/main-host \
  --prefix=nxmfdf \
  --bundler=esbuild \
  --port=4200 \
  --standalone \
  --routing
5. pnpm exec nx g @nx/angular:application \
  --directory=apps/mf_remote_a \
  --prefix=nxmfdf \
  --bundler=esbuild \
  --port=4201 \
  --standalone \
  --routing
6. pnpm exec nx g @nx/angular:application \
  --directory=apps/mf_remote_b \
  --prefix=nx-mf-df \
  --bundler=esbuild \
  --port=4202 \
  --standalone \
  --routing
7. pnpm exec nx g @nx/angular:application \
  --directory=apps/mf_remote_c \
  --prefix=nxmfdf \
  --bundler=esbuild \
  --port=4203 \
  --standalone \
  --routing
8. pnpm add -D @angular-architects/native-federation
9. pnpm exec nx g @angular-architects/native-federation:init \
  --project=main-host \
  --port=4200 \
  --type=dynamic-host
10. pnpm exec nx g @angular-architects/native-federation:init \
  --project=mf_remote_a \
  --port=4201 \
  --type=remote
11. pnpm exec nx g @angular-architects/native-federation:init \
  --project=mf_remote_b \
  --port=4202 \
  --type=remote
12. pnpm exec nx g @angular-architects/native-federation:init \
  --project=mf_remote_c \
  --port=4203 \
  --type=remote
13. create content of the federation.manifest.json of main-host
14. Implement routes based on the angulararchitects.io native federation
15. pnpm exec nx g @nx/angular:library \
  --directory=libs/common-ui-lib \
  --standalone \
  --buildable \
  --publishable=false
  (get rid of the common-ui-lib it represent a component)
16. npx nx g @nx/angular:component libs/common-ui-lib/src/lib/nx-version/angular-version.ts --standalone --export --no-interactive
17. npx nx g @nx/angular:component libs/common-ui-lib/src/lib/nx-version/nx-version.ts --standalone --export --no-interactive
18. implement (fake) nx-version and angular-version component logic
19. npx nx generate @nx/angular:component --path=apps/main-host/src/app/shared/components/header/header --standalone
20. npx nx generate @nx/angular:component --path=apps/main-host/src/app/shared/components/main/main --standalone
21. npx nx generate @nx/angular:component --path=apps/main-host/src/app/shared/components/footer/footer --standalone
22. npx nx generate @nx/angular:component --path=apps/main-host/src/app/shared/components/layout/layout --standalone
23. implement header, main, footer, layout logic
24. get rid of the component NxWelcome
25. pnpm install tailwindcss @tailwindcss/postcss postcss --force
26. add .postcssrc.json
27. add @import "tailwindcss"; to all styles.css
28. UI cosmetics host etc.
29. Create build scripts
30. fix tailwind install
31. fix footer always visible, add scrollbar to main instead of whole app
32. create github build and deploy


## Run

From the `nx-mf-df` workspace (`cd nx-mf-df`), use the package scripts:

| Script | What it runs |
|--------|----------------|
| `pnpm start:remote-c` | `mf_remote_c` dev server (port 4203) |
| `pnpm start:remote-b` | `mf_remote_b` dev server (port 4202) |
| `pnpm start:remote-a` | `mf_remote_a` dev server (port 4201) |
| `pnpm start:host` | `main-host` dev server (port 4200) |
| `pnpm start:all` | Orchestrates all apps via `nx-mf-df/scripts/start-all.mjs` (see below) |

For local federation, you can either open four terminals and run the four `start:remote-*` / `start:host` commands in an order that starts remotes before the host, or use `pnpm start:all` once.

Equivalent direct Nx commands (same as the `start:*` scripts) are `pnpm exec nx run <project>:serve` for each application.

### Why `start-all.mjs` exists

Running every app with a single `nx run-many -t serve` on several long-running Native Federation dev servers is awkward in practice: the task runner and Nx TUI do not always behave predictably with multiple continuous `serve` targets, and you may see a stuck or unclear session instead of a stable host plus remotes. A small Node orchestrator avoids that by spawning plain `pnpm exec nx run <project>:serve` processes itself.

Microfrontends are also easier to debug locally when remotes are already listening before the shell loads them. The script encodes that order explicitly instead of relying on `run-many` parallelism and implicit timing.

### How `start-all.mjs` works

The script lives at `nx-mf-df/scripts/start-all.mjs` and is wired from `pnpm start:all` in `nx-mf-df/package.json`.

1. **Spawn remotes in order** — It starts `mf_remote_c`, then after **2 seconds** `mf_remote_b`, then after **2 seconds** `mf_remote_a`. Each process is `pnpm exec nx run <project>:serve` from the `nx-mf-df` directory, with **`NX_TUI=false`** so Nx does not open the interactive TUI for those children.

2. **Wait until remotes are accepting TCP** — It polls every **600 ms** (for up to **3 minutes** after the last remote was spawned) by opening a short-lived TCP connection to the expected dev ports: **4203** (C), **4202** (B), **4201** (A). It tries **`127.0.0.1`** first, then **`::1`**, so behavior stays reasonable whether the dev server binds IPv4-only or IPv6 localhost.

3. **Start the host last** — When all three ports accept connections, it starts **`main-host`** the same way. If the wait window ends without all three ports answering, it **still starts the host** so the command cannot block forever on readiness checks; in that case the host may log federation errors until remotes finish compiling.

4. **Lifecycle** — It waits on the host process. When the host exits, or on **SIGINT** / **SIGTERM**, it sends **SIGTERM** to every spawned child so remotes are torn down together with the orchestrator.

If you prefer not to use this script, use four terminals and the individual `pnpm start:remote-*` and `pnpm start:host` commands instead.

## Patch for pnpm

After `pnpm install`, pnpm applies that patch to the installed copy of `@lkovari/microfrontend-platform-communication@0.1.4` under `node_modules`.

The patch itself only changes that package’s `package.json` `exports` / `module`: it rewrites paths from `*.mjs` to `*.js`, because the published tarball’s `dist` actually ships `.js` entrypoints, not `.mjs`. Without the patch, tools that follow `package.json` `"import"` fields can look for files that don’t exist and resolution/build can fail.

So the `patches` folder exists to fix upstream packaging in a tracked, reproducible way, without forking the package or relying on manual edits in `node_modules`.

# github pages

## Project site; replace with your real repo name segment in the URL
GH_PAGES_BASE=/monorepo-nx-mf-dyn-modfed/ pnpm run gh-build
## Deploy (pushes to branch gh-pages on origin)
GH_PAGES_BASE=/monorepo-nx-mf-dyn-modfed/ pnpm run gh-deploy