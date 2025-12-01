class APiError extends Error{
constructor(
    stsatusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
    
){
    super(message)
    this.stsatusCode = stsatusCode,
    this.data = null,
    this.message = message,
    this.success = false,
    this.errors = errors

    if (stack) {
        this.stack = stack;
    }else{
        Error.captureStackTrace(this,this.constructor)
    }
}
}