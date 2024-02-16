// Original file: D:/REact/MobileManualTaskHelper/src/proto/server.proto

import type { Long } from '@grpc/proto-loader';

export interface LoginRequest {
  'email'?: (string);
  'password'?: (string);
  'phoneNumber'?: (string);
  'gender'?: (string);
  'appId'?: (number | string | Long);
}

export interface LoginRequest__Output {
  'email': (string);
  'password': (string);
  'phoneNumber': (string);
  'gender': (string);
  'appId': (Long);
}
