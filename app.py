import asyncio
import json
import base64
from websockets.server import serve, WebSocketServerProtocol


WAITING_FOR_PASSWORD = 0
ONLINE = 1
PLAYING = 2
AFK = 3


async def handler(ws: WebSocketServerProtocol, path: str):
    status = WAITING_FOR_PASSWORD
    username = ""
    password = ""
    login_time = 0
    
    while True:
        encrypted = await ws.recv()
        if not isinstance(encrypted, str):
            await ws.close(1003)
            return
        resp = json.loads(base64.b64decode(encrypted))
        meta = base64.b64decode(resp["meta"])
        data = json.loads(base64.b64decode(resp["data"]))
        
        print(meta, data)


start_server = serve(handler, "0.0.0.0", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
