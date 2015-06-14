/**
 * Created by piyusht on 14/06/15.
 */

app.service('restuarantService', function($http){

    this.getRestuarants = function()

        /*
            Dummy Data for now, instead you need to call the APIs using
            $http.get()
         */


        return {
            restuarants:[
                {
                    name:'Food Court',
                    id:'3244'
                },

                {
                    name:'Eatsome',
                    id:'3144'
                },

                {
                    name:'Shere Punjab',
                    id:'3254'
                }
            ]
        }
    }

})