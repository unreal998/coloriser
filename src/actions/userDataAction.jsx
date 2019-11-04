export function UserData(){
    return (dispatch)=>{
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        });

/*
        axios.get("https://randomuser.me/api/")
            .then(response =>{
                    response.data.results.map(function(el){
                        console.log(el)
                        return dispatch({
                            type: "USER_DATA",
                            payload: el
                        })
                    })


            })
*/
    }

};