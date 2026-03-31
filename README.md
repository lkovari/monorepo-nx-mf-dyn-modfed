# monorepo-nx-mf-dyn-modfed

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
  --project=mf_remote_home \
  --port=4203 \
  --type=remote
  
