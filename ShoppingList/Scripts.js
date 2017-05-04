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
				var itemClasses = 'item-task' + (item.isCompleted ? ' is-completed' : '');
				
				itemsListEl.append('\
				<tr>\
					<td class="' + itemClasses +'">' + item.task + '</td>\
					<td>\
						<button>Edit</button>\
						<button>Delete</button>\
					</td>\
				</tr>\
				');
			});
		},

		toggleTodo: function() {
			items.forEach(function(item) {
				if (item.task === $(this).text()) {
					item.isCompleted = !item.isCompleted;
				}
			}.bind(this));
			app.showTodos();
		}

	};

	app.showTodos();

	$('.item-task').on('click', app.toggleTodo);
});