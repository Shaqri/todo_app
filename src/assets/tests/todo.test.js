import Todo from '../scripts/todo';

describe('Todo', () => {
    describe('getTodoContainerClass', () => {
        it("get '.undone' class container if todo is not done yet", () => {
            const todo = Todo('title', 'description', '25-11-2021', 'medium', 'notes', false, 'any');
            expect(todo.getTodoContainerClass(todo.checklist)).toBe('.undone');
        } );
    });
});