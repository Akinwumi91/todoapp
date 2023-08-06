const apirequest = async (url='', optionobj=null, errmsg=null) =>{
    try{
        const response = await fetch(url, optionobj)
        if(!response.ok) throw Error('data not found')
    }catch(err){
        errmsg = err.message
    }finally{
        return errmsg
    }
}
export default apirequest