import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TPriority = "High" | "Medium" | "Low";
export interface ITodo {
    id?: string;
    title: string;
    description: string;
    priority?: TPriority;
    isCompleted?: boolean;
}
export interface IInitialState {
    todos: ITodo[];
}

const initialState: IInitialState = {
    todos: [
        {
            title: "Sunt eu et incididunt occaecat ut nisi fugiat quis ad aliquip ad.",
            description: "Ex deserunt exercitation tempor labore.",
            priority: "High",
            isCompleted: false,
        },
        {
            title: "Velit est officia deserunt ut nulla ipsum magna duis ipsum ullamco reprehenderit cillum Lorem dolor.",
            description:
                "Sunt quis consectetur dolor nisi duis esse aliquip aliqua. Culpa amet excepteur occaecat exercitation reprehenderit Lorem cupidatat. Commodo cillum consectetur laboris sit aliqua magna voluptate officia officia sit id excepteur duis. Sit veniam occaecat exercitation amet voluptate aliquip qui ipsum esse eu consectetur ad quis. Elit cillum irure velit voluptate occaecat labore sunt ut quis. Aliqua aliquip reprehenderit occaecat minim et proident consectetur esse ullamco mollit occaecat ad nulla.",
            priority: "Low",
            isCompleted: false,
        },
    ],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos.push({...action.payload, isCompleted: false});
            // explanation: isCompleted is fixed as false 
        },
        
    },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
