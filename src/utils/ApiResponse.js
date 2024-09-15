class ApiResponse {
    constructor(statusCode,data,message = 'success'){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400  // more than 400 is used for Errors , this is for response
    }
}