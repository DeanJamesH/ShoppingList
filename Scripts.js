$(function() {
	var items = [
	{
		task: 'Coconut Oil',
		isCompleted: false
	},
	{
		task: 'Blueberries',
		isCompleted: true
	}
	];

	var app = {
		showTodos: function() {
			var itemsListEl = $('#items-list');

			itemsListEl.html('');

			items.forEach(function(item) {
				itemsListEl.append('\
				<tr>\
					<td>' + item.task + '</td>\
					<td>\
						<button>Edit</button>\
						<button>Delete</button>\
					</td>\
				</tr>\
				');
			});
		}
	};

	app.showTodos();
});