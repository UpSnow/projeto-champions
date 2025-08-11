import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async ()=>{

    const data = await PlayerRepository.finAllPlayers();
    let reponse = null;

    if(data){
        reponse = await HttpResponse.ok(data);
    }else{
        reponse = await HttpResponse.noContet();
    }

    return reponse;
}

export const getPlayerByIdService = async (id: number) =>{

    const data = await PlayerRepository.findPlayer(id)
    let reponse = null;

    if(data){
        reponse = HttpResponse.ok(data)
    }else{
        reponse = HttpResponse.noContet()
    }

    return reponse;

}



