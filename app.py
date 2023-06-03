import asyncio
from websockets.server import serve, WebSocketServerProtocol


async def handler(ws: WebSocketServerProtocol, path: str):
    ...


start_server = serve(handler, "0.0.0.0", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
