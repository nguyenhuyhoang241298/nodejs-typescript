import { Server, Socket } from 'socket.io'

type HttpErrorCode =
  | 'BAD_REQUEST'
  | 'UNAUTHORIZED'
  | 'NOT_FOUND'
  | 'METHOD_NOT_ALLOWED'
  | 'NOT_ACCEPTABLE'
  | 'REQUEST_TIMEOUT'
  | 'CONFLICT'
  | 'GONE'
  | 'LENGTH_REQUIRED'
  | 'PRECONDITION_FAILED'
  | 'PAYLOAD_TOO_LARGE'
  | 'URI_TOO_LONG'
  | 'UNSUPPORTED_MEDIA_TYPE'
  | 'RANGE_NOT_SATISFIABLE'
  | 'EXPECTATION_FAILED'
  | 'TEAPOT'

type BackendErrorCode = 'VALIDATION_ERROR' | 'USER_NOT_FOUND' | 'INVALID_PASSWORD'

type ErrorCode = HttpErrorCode | BackendErrorCode | 'INTERNAL_ERROR'

interface ServerToClientEvents {
  chat: (message: string) => void
}

interface ClientToServerEvents {
  chat: (message: string) => void
  connection: (socket: Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>) => void
}

interface InterServerEvents {}

interface SocketData {}

declare global {
  var _io: Server
}
