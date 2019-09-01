
import fetch from 'node-fetch';
import dotenv from 'dotenv'

dotenv.config()
export async function getFromApi() {
	let data = {};

	const url = `https://api.figma.com/v1/files/${process.env.REACT_APP_FILE_KEY}`;
	console.log(url,"url");
	await fetch(url, {
		headers: {
			'X-Figma-Token': process.env.REACT_APP_FIGMA_TOKEN
		}
	})
		.then(res => res.json())
		.then(json => {
			data = json;
			
		});

        console.log(data,"data");
        
    return data;
    
}

getFromApi()