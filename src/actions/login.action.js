 const validateLogin = (data) =>{
    return {"type":"AUTHNTICATE","userInfo":data,"loader":true,"error":"","isAuthentication":false}
}
export default validateLogin;