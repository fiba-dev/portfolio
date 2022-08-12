export async function obtenerProyectos() {
	return await fetch(
		"https://cdn.contentful.com/spaces/0q692q1cfe6h/environments/master/entries?access_token=VlgYpjdWI8YUg5Mthuwkb-HuPbcBKUuvvLtEl0W-wew&content_type=portfolio"
	)
		.then((res) => {
			return res.json();
		})
		.then((obj) => {
			let lista = [];
			for (const key of obj.items) {
				let link = "";
				obj.includes.Asset.filter((res) => {
					if (res.sys.id == key.fields.imagen.sys.id) {
						link = "https:" + res.fields.file.url;
					}
				});

				let obj1 = {
					title: key.fields.subtitulo1,
					key: key.sys.id,
					pictureURL: link,
					info: key.fields.descripcion,
					GitHub: key.fields.github.content[0].content[0].value,
					webPage: key.fields.webpage.content[0].content[0].value,
				};
				lista.push(obj1);
			}
			return lista;
		});
}
export async function obtenerProyectosEnglish() {
	return await fetch(
		"https://cdn.contentful.com/spaces/0q692q1cfe6h/environments/master/entries?access_token=VlgYpjdWI8YUg5Mthuwkb-HuPbcBKUuvvLtEl0W-wew&content_type=portfolioEn"
	)
		.then((res) => {
			return res.json();
		})
		.then((obj) => {
			let lista = [];
			for (const key of obj.items) {
				let link = "";
				obj.includes.Asset.filter((res) => {
					if (res.sys.id == key.fields.imagen.sys.id) {
						link = "https:" + res.fields.file.url;
					}
				});

				let obj1 = {
					title: key.fields.subtitulo1,
					key: key.sys.id,
					pictureURL: link,
					info: key.fields.descripcion,
					GitHub: key.fields.github.content[0].content[0].value,
					webPage: key.fields.webpage.content[0].content[0].value,
				};
				lista.push(obj1);
			}
			return lista;
		});
}
