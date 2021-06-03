const appendTable = (table, datum) => {
	table.chainableAppendChild(
		document
			.createElement("tr")
			.chainableAppendChild(
				document
					.createElement("td")
					.chainableAppendChild(document.createTextNode(datum.id))
			)
			.chainableAppendChild(
				document
					.createElement("td")
					.chainableAppendChild(document.createTextNode(datum.source))
			)
			.chainableAppendChild(
				document
					.createElement("td")
					.chainableAppendChild(
						document.createTextNode(
							`Rp ${datum.amount.toLocaleString("id-ID")}`
						)
					)
			)
			.chainableAppendChild(
				document
					.createElement("td")
					.chainableAppendChild(
						document.createTextNode(
							`${new Date(datum.createdAt).toLocaleDateString(
								"id-ID"
							)}`
						)
					)
			)
	);
};

const renderTablet = (div, datum, index) => {
	div.chainableAppendChild(
		document
			.createElement("article")
			.chainableAppendChild(
				document
					.createElement("p")
					.chainableAppendChild(document.createTextNode(index + 1))
			)
			.chainableAppendChild(
				document
					.createElement("p")
					.chainableAppendChild(document.createTextNode("Sumber: "))
					.chainableAppendChild(
						document
							.createElement("span")
							.chainableAppendChild(
								document.createTextNode(datum.source)
							)
					)
			)
			.chainableAppendChild(
				document
					.createElement("p")
					.chainableAppendChild(document.createTextNode("Jumlah: "))
					.chainableAppendChild(
						document
							.createElement("span")
							.chainableAppendChild(
								document.createTextNode(datum.amount)
							)
					)
			)
			.chainableAppendChild(
				document
					.createElement("p")
					.chainableAppendChild(document.createTextNode("Tanggal: "))
					.chainableAppendChild(
						document
							.createElement("span")
							.chainableAppendChild(
								document.createTextNode(
									new Date(
										datum.createdAt
									).toLocaleDateString("id-ID")
								)
							)
					)
			)
	);
};

d.get({
	url: baseUrl + "/income/8",
	success: (data) => {
		const tableBodyEl = d("#income-body")[0];
		const onTabletEl = d("#income-tablet")[0];

		data.forEach((datum) => {
			appendTable(tableBodyEl, datum);
		});

		data.forEach((datum, index) => {
			renderTablet(onTabletEl, datum, index);
		});
	},
	err: (error) => console.log(error),
	done: () => console.log("Done"),
});

const createIncome = () => {
	d.post({
		url: baseUrl + "/income/8",
		data: JSON.stringify({
			source: `Simulasi income ${Math.floor(Math.random() * 100)}`,
			amount: 20000000,
		}),
		success: (data) => onChangePage("/sucess.html"),
		err: (error) => console.log(error),
		done: () => console.log("done"),
	});
};
