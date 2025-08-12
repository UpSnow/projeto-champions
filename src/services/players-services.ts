import { response } from "express";
import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayerService = async ()=>{

    const data = await PlayerRepository.finAllPlayers();
    let reponse = null;

    if(data){
        reponse = await HttpResponse.ok(data);
    }else{
        reponse = await HttpResponse.noContent();
    }

    return reponse;
}

export const getPlayerByIdService = async (id: number) =>{

    const data = await PlayerRepository.findPlayer(id)
    let reponse = null;

    if(data){
        reponse = await HttpResponse.ok(data)
    }else{
        reponse = await HttpResponse.noContent()
    }

    return reponse;

}

export const createPlayerService = async (player: PlayerModel) =>{

    let reponse = null;

    if(Object.keys(player).length !== 0){
        await PlayerRepository.insertPlayer(player);
        reponse = await HttpResponse.created();
    }else {
        reponse= await HttpResponse.badRequest();
    }

    return reponse;
}

export const deletePlayerService= async (id:number) => {
    const isDeleted  = await PlayerRepository.deleteOnePlayer(id)
    let reponse = null

    if(isDeleted){
        reponse = await HttpResponse.ok({message:"deleted"});
    }else {
        reponse = await HttpResponse.badRequest();
    }

    return reponse;
}

export const updatePlayerService = async(id:number, statistics: StatisticsModel)=>{
    const data = await PlayerRepository.findAndModifyPlayer(id,statistics)
    let response = null


    if(Object.keys(data).length === 0){
        response = HttpResponse.badRequest();
    }else{
        response = HttpResponse.ok(data);

    }

    return response;

}

