FROM denoland/deno:alpine-1.20.1@sha256:6599d0fae1b057bb710b86b4aaeec7c6939653636f8dfb5c8e9e3f8fa2c0c768
WORKDIR /deno
RUN chown deno:deno /deno
USER deno
COPY --chown=deno:deno deps.ts .
RUN deno cache deps.ts
COPY --chown=deno:deno . .
RUN deno cache mod.ts
CMD ["run", "--allow-net", "--allow-env", "--allow-read", "mod.ts"]
