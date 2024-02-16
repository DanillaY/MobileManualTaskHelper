// Original file: D:/REact/MobileManualTaskHelper/src/proto/server.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { LoginRequest as _server_LoginRequest, LoginRequest__Output as _server_LoginRequest__Output } from '../server/LoginRequest';
import type { LoginResponse as _server_LoginResponse, LoginResponse__Output as _server_LoginResponse__Output } from '../server/LoginResponse';
import type { RegRequest as _server_RegRequest, RegRequest__Output as _server_RegRequest__Output } from '../server/RegRequest';
import type { RegResponse as _server_RegResponse, RegResponse__Output as _server_RegResponse__Output } from '../server/RegResponse';

export interface AuthClient extends grpc.Client {
  Login(argument: _server_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_server_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _server_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_server_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _server_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_server_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _server_LoginRequest, callback: grpc.requestCallback<_server_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _server_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_server_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _server_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_server_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _server_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_server_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _server_LoginRequest, callback: grpc.requestCallback<_server_LoginResponse__Output>): grpc.ClientUnaryCall;
  
  Register(argument: _server_RegRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_server_RegResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _server_RegRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_server_RegResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _server_RegRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_server_RegResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _server_RegRequest, callback: grpc.requestCallback<_server_RegResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _server_RegRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_server_RegResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _server_RegRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_server_RegResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _server_RegRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_server_RegResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _server_RegRequest, callback: grpc.requestCallback<_server_RegResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthHandlers extends grpc.UntypedServiceImplementation {
  Login: grpc.handleUnaryCall<_server_LoginRequest__Output, _server_LoginResponse>;
  
  Register: grpc.handleUnaryCall<_server_RegRequest__Output, _server_RegResponse>;
  
}

export interface AuthDefinition extends grpc.ServiceDefinition {
  Login: MethodDefinition<_server_LoginRequest, _server_LoginResponse, _server_LoginRequest__Output, _server_LoginResponse__Output>
  Register: MethodDefinition<_server_RegRequest, _server_RegResponse, _server_RegRequest__Output, _server_RegResponse__Output>
}
