# monorepo-nx-mf-dyn-modfed

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
17. px nx g @nx/angular:component libs/common-ui-lib/src/lib/nx-version/nx-version.ts --standalone --export --no-interactive
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


## Run

1. cd nx-mf-df
2. pnpm exec nx run mf_remote_c:serve
3. pnpm exec nx run mf_remote_b:serve
4. pnpm exec nx run mf_remote_a:serve
5. pnpm exec nx run main-host:serve