const areValidCredentials = (user,pass) => {
    if(user.length>3 && pass.length>7){return true}else{return false}
}