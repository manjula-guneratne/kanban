export default class KanbanAPI {
    static getItem(columnId){
        const column = read().find(column => column.id == columnId);

        if (!column){
            return [];
        }

        return column.items;
    }

    static insertItem(columnId, content){
        const data = read();
        const column = data.find(column => column.id == columnId);
        const item = {
            id: Math.floor(Math.random() * 100000),
            content
        };

        if(!column){
            throw new Error("Column does not exist.");
        }

        column.items.push(item);
        save(data);

        return item;
    }

    static updateItem(itemId, newProps){
        const data = read();
        const [item, currentColumn] = (() => {
            for (const column of data){
                const item  = column.items.find(item => item.id == itemId);

                if(item){
                    return [item, column];
                }
            }
        })();

        if(!item){
            throw new Error('Item not found.');
        }

        item.content = newProps.content === undefined ? item.content:newProps.content;
    }

}

function read(){
    const json = localStorage.getItem("kanban-data");

    if (!json){       //runs on default
        return [
            {
                id: 1,
                items: []
            },
            {
                id: 2,
                items: []
            },
            {
                id: 3,
                items: []
            }
        ];
    }

    return JSON.parse(json);
}

function save(data){
    localStorage.setItem("kanban-data", JSON.stringify(data));
}