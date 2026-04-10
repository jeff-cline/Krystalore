import Mux from '@mux/mux-node'

let muxClient: Mux | null = null

export function getMuxClient(): Mux {
  if (!muxClient) {
    muxClient = new Mux({
      tokenId: process.env.MUX_TOKEN_ID!,
      tokenSecret: process.env.MUX_TOKEN_SECRET!,
    })
  }
  return muxClient
}
