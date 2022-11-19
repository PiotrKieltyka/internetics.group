FROM denoland/deno:alpine-1.28.1@sha256:394ea9890cf9d0d4ffa2e826c3bab8336ee6e7d11b47407c90196697d7885698
WORKDIR /deno
RUN chown deno:deno /deno
USER deno
COPY --chown=deno:deno deps.ts .
RUN deno cache deps.ts
COPY --chown=deno:deno . .
RUN deno cache mod.ts
CMD ["run", "--allow-net", "--allow-env", "--allow-read", "mod.ts"]
