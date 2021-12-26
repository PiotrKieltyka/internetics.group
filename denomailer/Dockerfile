FROM denoland/deno:alpine-1.17.1@sha256:1ce0e0fc99bea6f3a66c44020693310d648cf3f9f96f5cd3bbc2add842bdc222
WORKDIR /deno
RUN chown deno:deno /deno
USER deno
COPY --chown=deno:deno deps.ts .
RUN deno cache deps.ts
COPY --chown=deno:deno . .
RUN deno cache mod.ts
CMD ["run", "--allow-net", "--allow-env", "--allow-read", "mod.ts"]
