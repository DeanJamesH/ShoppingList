$(function() {
	var items = [
	{
		task: 'J Query',
		isCompleted: false
	},
	{
		task: 'take a nap',
		isCompleted: true
	}
	];

	var app = {
		showTodos: function() {
			ver itemsListEl = $('#Items-List');

			itmesListEl.html('');

			items.forEach(function(item) {
				itemsListEl.append('\
				<tr>\
					<td>' + items.task + '</td>\
					<td>\
						<button>Edit</button>\
						<button>Delete</button>\
					</td>\
				</tr>)\
				');
			});
		}
	};

	app.showTodos();
});