
import{cityList} from "api/travel.js"

const state={
  cityList:[],

}


const mutations={
  getMutationsCityList(state,params){
     state.cityList = params;
  }
}

 

const actions = {
 async getCityList({commit}){
    let data = await cityList()
    console.log(data);  
    commit("getMutationsCityList",data.data.cities)
    
  }
}

export default {
  state,
  mutations,
  actions,
  namespaced:true
}