import Router from "koa-router";

const router = new Router({
    prefix:"/users"
})

let users = [
    {id:1,first_name:'Fabo',last_name:"Arriaga"}
]

router.get('/',context=>{
    context.body={
        status:'success',
        users
    }
})

router.get('/:id', context=>{
    const currentUser = users.find(user => user.id===context.params.id)
    if(currentUser) context.body
    else{
        context.response.status =404
        context.body={
            status:'Error',
            error:'not found'
        }
    }
})

router.post('/', context=>{
    let {first_name,last_name} = context.request.body
    //create user
})

export default router