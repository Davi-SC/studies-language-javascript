const sigmoid = (v) => {
    return 1/(1 + Math.exp(-v))
}
const tangh = (v) => {
    return (Math.exp(v)-Math.exp(-v))/(Math.exp(v)+Math.exp(-v))
}
const relu = (v) => {
    if(v>0){
        return v
    }
    return 0 
}

export default (sigmoid, tangh, relu) 