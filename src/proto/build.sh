#!/bin/bash

PROTO_DIR=D:\REact\MobileManualTaskHelper\src\proto\server.proto

npx proto-loader-gen-types --defaults --grpcLib=@grpc/grpc-js --includedDirs=./src/proto/  --outDir=./src/proto/ PROTO_DIR