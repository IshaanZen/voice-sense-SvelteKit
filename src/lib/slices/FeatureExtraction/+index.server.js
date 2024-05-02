import { error, fail } from "@sveltejs/kit";


// @ts-ignore
// export async function load({fetch}){
//     const response = await fetch("http://localhost:5173/api/post")
//     const data = await response.json()

//         return{
//                 data : data.Hello
//         }
// }


export const actions= {
    // @ts-ignore
   recorder_endpoint : async({request} ) =>{
    const data = await request.formData();
    const file = data.get('audio-upload')
    console.log(file)

    const fileTypes =[".wav","mp3"]
    let includesfileTypes = false;

    for(let i =0 ; i<fileTypes.length;i++){

        if(file.endsWith(fileTypes[i])){
            includesfileTypes = true;
            break;
        }
    }
    if(!includesfileTypes) return fail(500,{error:true})

    return{
        success:true
    }
   }
}

