FROM denoland/deno:alpine-1.13.2@sha256:a513c25cb5af39943bb9fc22937e88880f52dc8db7d3945d2730ba3c0950e989
USER deno
COPY deps.ts .
RUN deno cache deps.ts
ADD . .
CMD ["run", "--allow-net", "--allow-env", "--allow-read", "mod.ts"]
