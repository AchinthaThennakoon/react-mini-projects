export const addToDoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: { todos },
    } = getState();

    const hasTodo = todos.find((i) => i.todo === todo);

    if (!hasTodo && todo !== '') {
        dispatch({
            type: "ADD_TODO",
            payload: [{ id: todo, todo }, ...todos]
        });
    }
}

export const removeToDoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: { todos },
    } = getState();

    const hasTodo = todos.find((i) => i.todo === todo);

    dispatch({
        type: "REMOVE_TODO",
        payload: todos.filter((t) => t.id !== todo)
    });
}