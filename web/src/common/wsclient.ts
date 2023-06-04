import { Base64 } from "js-base64"

export default class WsClient {
  static instance: WsClient
  private readonly ws: WebSocket
  private readonly handlers: Map<string, (data: object) => void> = new Map()

  private constructor(url: string) {
    this.ws = new WebSocket(url)
    this.ws.onmessage = (e) => {
      const resp = JSON.parse(Base64.decode(e.data))
      const meta: string = Base64.decode(resp.meta)
      const data: object = JSON.parse(Base64.decode(resp.data))
      const fn = this.handlers.get(meta)
      if (typeof fn !== 'undefined') {
        fn(data)
      }
    }
  }

  public handle(meta: string, callback: (data: object) => void) {
    this.handlers.set(meta, callback)
  }

  public send(meta: string, data: object) {
    this.ws.send(
      Base64.encode(
        JSON.stringify({
          meta: Base64.encode(meta),
          data: Base64.encode(JSON.stringify(data)),
        })
      )
    )
  }

  static connect(url: string) {
    WsClient.instance = new WsClient(url)
  }
}
