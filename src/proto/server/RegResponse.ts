// Original file: D:/REact/MobileManualTaskHelper/src/proto/server.proto

import type { Long } from '@grpc/proto-loader';

export interface RegResponse {
  'userId'?: (number | string | Long);
}

export interface RegResponse__Output {
  'userId': (Long);
}
