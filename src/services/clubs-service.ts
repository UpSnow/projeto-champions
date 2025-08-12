import * as HttpResponse from "../utils/http-helper"

import * as repository from "../repositories/clubs-repository"

export const getClubService= async () =>{
    const data = await repository.findAllClubs();
    let response = null;

    if(data){
        response = await HttpResponse.ok(data);
    }else{
        response = await HttpResponse.noContent();
    }
    return response



}