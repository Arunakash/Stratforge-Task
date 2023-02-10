import axios from 'axios';

export class ApiServices{

    static getSpacXRockets = async() => {
        return axios({
          method: 'get',
          url: `https://api.spacexdata.com/v4/rockets`,
          headers: {
            'content-type': 'application/json',
            accept: 'application/json',  
          }
        }).then((response) => {
          return response.data;
        }).catch(function (error) {
          console.log(error);
        });
      }

    static getSpaceXHistory = async() => {
        return axios({
          method: 'get',
          url: `https://api.spacexdata.com/v4/history`,
          headers: {
            'content-type': 'application/json',
            accept: 'application/json',  
          }
        }).then((response) => {
          return response.data;
        }).catch(function (error) {
          console.log(error);
        });
      }



      static getSpaceXLaunches = async() => {
        return axios({
          method: 'get',
          url: `https://api.spacexdata.com/v5/launches/upcoming`,
          headers: {
            'content-type': 'application/json',
            accept: 'application/json',  
          }
        }).then((response) => {
          return response.data;
        }).catch(function (error) {
          console.log(error);
        });
      }
}