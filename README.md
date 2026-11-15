# Record pipeline test

[![make.fun · markdown-render-speed-02](https://make.fun/badge/markdown-render-speed-02.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![rank](https://make.fun/badge/markdown-render-speed-02/icandoitone/makefun-mrs02-record-test3/rank.svg)](https://make.fun/bounty/markdown-render-speed-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![reward](https://make.fun/badge/markdown-render-speed-02/icandoitone/makefun-mrs02-record-test3/reward.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)

This is a minimal placeholder entry testing the recording pipeline for the make.fun markdown-render-speed-02 contest. It contains only a stub renderer so the end-to-end recording, bundling, and submission flow can be exercised before the real entry is built.

## Run it

The harness provides `/input/cases.json`; the driver reads it and writes `/output/html.json`:

```sh
node --experimental-strip-types main.ts
```
