import Column from "./Column";

export default class Kanban {
    constructor(root) {
        this.root = root;

        Kanban.columns().forEach(column => {
            const columnView = new Column(column.id, column.title);

            this.root.appendchild(columnView.elements.root);
        });
    }

    static columns(){
        return [
            {
                id: 1,
                title: "Not started"
            },
            {
                id: 2,
                title: "In Progress"
            },
            {
                id: 3,
                title: "Completed"
            },
        ];
    }
}