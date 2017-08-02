const Pageres = require('pageres');
let pageres = new Pageres({format: 'jpg', delay: 5});
let fs = require('fs');

const url = 'http://localhost:3000/#/';
const path = './src/components/slides/';

let items = fs.readdirSync(path),
	slidesName = items.filter((item) => {
		return fs.statSync(`${path}/${item}`).isDirectory()
	});

for (let i = slidesName.length - 1; i >= 0; i--) {
	let slide = slidesName[i].replace('slide_','');	
	pageres.src(url + slide, ['1024x768'], {crop: true, scale: 0.5, filename: slide});
}

//pageres.src(url + '3_173_1', ['1024x768'], {crop: true, scale: 0.5, filename: '3_173_1'});
pageres.dest('img').run().then(() => console.log('done'));
