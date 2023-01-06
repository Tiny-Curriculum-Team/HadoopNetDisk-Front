import createAxios from "../utiles/request";

const api = {
  showfile: "/file/getfiles/",
};

export default function getfile(require_path){
    return createAxios({
        url:api.showfile,
        method:'GET',
        headers:{
          'Authorization': localStorage.getItem('token')
        },
        params:{
          require_path
        }
    })
}