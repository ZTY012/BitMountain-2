export default class WsClient {
  static instance: WsClient
  private readonly ws: WebSocket
  private readonly handlers: Map<string, (data: object) => void> = new Map()

  private constructor(url: string) {
    this.ws = new WebSocket(url)
    this.ws.onmessage = (e) => {
      this.handlers.get(e.data.packet)!(e.data.data)
    }
  }

  public handle(packet: string, callback: (data: object) => void) {
    this.handlers.set(packet, callback)
  }

  public send(packet: string, data: object) {
    this.ws.send(JSON.stringify({
      packet,
      data
    }))
  }

  static connect(url: string) {
    WsClient.instance = new WsClient(url)
  }
}
