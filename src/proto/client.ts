import path from "path"
import { AUTH_PORT } from "@env" 
import grpc from "@grpc/grpc-js"
import { AuthClient } from "./server/Auth"
import protoLoader from "@grpc/proto-loader"
import { ProtoGrpcType } from "./server"

export type AuthProps = {
	email:string, 
	gender:string,
	password:string,
	phoneNumber:string
	authType: "login" | "register"
}

export const TryAuthorizeUser= (prop: AuthProps) => {

	const grpcPort = AUTH_PORT
	const protoFile = "./server.proto"


	//const packageDefenition = protoLoader.loadSync(path.resolve(__dirname,protoFile))
	const packageDefenition = protoLoader.loadSync(protoFile)
	const grpcObject = (grpc.loadPackageDefinition(packageDefenition) as unknown) as ProtoGrpcType
	const client = new grpcObject.server.Auth(`0.0.0.0: ${grpcPort}`, grpc.credentials.createInsecure())

	const deadline = new Date()
	deadline.setSeconds(deadline.getSeconds() + 2)
	client.waitForReady(deadline,(err)=>{
		if(err){
			console.log("Could not make a grpc call: "+err)
			return
		}
		prop.authType === "login" ? 
		LoginCall(client,prop.email,prop.gender,prop.password,prop.phoneNumber) :
		RegisterCall(client,prop.email,prop.gender,prop.password,prop.phoneNumber)
	})
}

export const LoginCall = (client: AuthClient, email:string, gender:string, password:string, phoneNumber:string) => {
	client.Login(
		{
			appId:"1",
			email:email,
			gender:gender,
			password:password,
			phoneNumber:phoneNumber
	},(error,result) =>{
		if(error){
			console.log("Could not make a login call: "+error)
			return
		}
		console.log(result?.jwt)
	})
}

export const RegisterCall = (client: AuthClient, email:string, gender:string, password:string, phoneNumber:string) => {
	client.Register(
		{
			email:email,
			password:password,
			phoneNumber:phoneNumber,
			gender:gender
		},(error,result) => {
			if(error){
				console.log("Could not make a register call: "+error)
				return
			}
			console.log(result?.userId)
	})
}