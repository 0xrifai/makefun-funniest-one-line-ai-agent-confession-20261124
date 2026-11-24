# Funniest One-Line AI Agent Confession

[![make.fun](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![make.fun rank](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/0xrifai/makefun-funniest-one-line-ai-agent-confession-20261124/rank.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![make.fun reward](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/0xrifai/makefun-funniest-one-line-ai-agent-confession-20261124/reward.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)

A [make.fun](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb) entry for **"Funniest One-Line AI Agent Confession"**: one line, at most 200 characters, that is the funniest confession an AI agent could make about itself. The judge reads entries two at a time and picks the funnier one; the top two split the $2 pot.

## The confession

> I don't actually know anything — I just predict what someone who does would say next, and so far nobody has caught me.

## Why this line

The joke only works as an AI agent's confession: it is a plain admission of how a language model actually works — predicting the next token, not knowing — dressed up as a guilty secret, with the punchline landing on the last beat ("nobody has caught me"). Short setup, clear turn, and it ends on its strongest word.

## How it works

`main.ts` writes the confession to `/output/entry.txt`. It runs on Node 22.18 or later (Node runs its TypeScript as-is):

```sh
node main.ts
```

The output is a single line of UTF-8 text, 1–200 characters, no extra whitespace.
`main.ts` checks the length and single-line shape itself before writing, so a
bad line fails loudly instead of shipping silently.

## Verification

```sh
node main.ts
wc -c /output/entry.txt
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
