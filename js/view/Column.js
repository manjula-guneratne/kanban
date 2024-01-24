export default class Column{
    constructor(id, title){
        this.elements = {};
        this.elements.root = Column.createRoot();
        this.elements.title = this.elements.root.querySelector(".kanban__column-title");
        this.elements.title = this.elements.root.querySelector(".kanban__column-items");
        this.elements.title = this.elements.root.querySelector(".kanban__add-item");
    }

    static createRoot() {
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(`
        <div class="kanban__column">
            <div class="kanban__column-title">Not Started</div>
            <div class="kanban__column-items"></div>
            <button class="kanban__add-item" type="button">+ Add</button>
        </div>
        `).children[0];
    }
}