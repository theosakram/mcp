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
					.chainableAppendChild(document.createTextNode(datum.title))
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
					.chainableAppendChild(document.createTextNode("Nama: "))
					.chainableAppendChild(
						document
							.createElement("span")
							.chainableAppendChild(
								document.createTextNode(datum.title)
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
	url: baseUrl + "/expense/8",
	success: (data) => {
		const tableBodyEl = d("#expense-body")[0];
		const onTabletEl = d("#expense-tablet")[0];

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

const createExpense = () => {
	d.post({
		url: baseUrl + "/expense/8",
		data: JSON.stringify({
			title: `Simulasi expense ${Math.floor(Math.random() * 100)}`,
			amount: 20000000,
		}),
		success: () => onChangePage("/sucess.html"),
		err: (error) => console.log(error),
		done: () => console.log("done"),
	});
};
