d.get({
	url: baseUrl + "/expense/8",
	success: (data) => {
		const tableBodyEl = d("#expense-body")[0];

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
								document.createTextNode(datum.title)
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
