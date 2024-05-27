import { writeFileSync } from 'fs';
import { fail } from '@sveltejs/kit';

export let prerender = false;


export const actions={
    default: async(event)=>{
        const formdata = Object.fromEntries( await event.request.formData() );
        
        if(
            !(formdata.fileToUpload as File).name ||
            (formdata.fileToUpload as File).name ==="undefined"
        ){
            return fail(400 , {
                error:true,
                message: "Provide a file to upload"
            });
        }

        const {fileToUpload} = formdata as {fileToUpload: File};

        // Write the file to the static folder
        writeFileSync(`static/${fileToUpload.name}`, Buffer.from(await fileToUpload.arrayBuffer()));
        
        return {
        success: true
        };

        

    }
}

