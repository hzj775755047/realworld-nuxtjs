export default function ({store,redirect}){
    console.log(store)
    if(!(store.state.user)){
        return redirect('/login')
    }
} 


  