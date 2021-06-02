d.get({
	url: baseUrl + "/income/8",
	success: (data) => {
		const tableBodyEl = d("#income-body")[0];

		data.forEach((datum) => {
			tableBodyEl.chainableAppendChild(
				document
					.createElement("tr")
					.chainableAppendChild(
						document
							.createElement("td")
							.chainableAppendChild(
								document.createTextNode(datum.id)
							)
					)
					.chainableAppendChild(
						document
							.createElement("td")
							.chainableAppendChild(
								document.createTextNode(datum.source)
							)
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
									`${new Date(
										datum.createdAt
									).toLocaleDateString("id-ID")}`
								)
							)
					)
			);
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
