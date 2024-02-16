import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthClient as _server_AuthClient, AuthDefinition as _server_AuthDefinition } from './server/Auth';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  server: {
    Auth: SubtypeConstructor<typeof grpc.Client, _server_AuthClient> & { service: _server_AuthDefinition }
    LoginRequest: MessageTypeDefinition
    LoginResponse: MessageTypeDefinition
    RegRequest: MessageTypeDefinition
    RegResponse: MessageTypeDefinition
  }
}

