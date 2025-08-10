import * as PlayerRepository from "../repositories/players-repository";
import { noContet, ok } from "../utils/http-helper";

export const getPlayerService = async ()=>{

    const data = await PlayerRepository.finAllPlayers();
    let reponse = null;

    if(data){
        reponse = await ok(data);
    }else{
        reponse = await noContet();
    }

    return reponse;
}

export const getPlayerId = async(id:number) =>{
    const data = await PlayerRepository.findPlayer(id);
    return data;
}