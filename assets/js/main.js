const { createApp } = Vue

createApp({
    data() {
        return {
            style: {
                border: {
                    zinc: "border border-zinc-500"
                }
            },
            formAddItem: {
                value: 1,
            },
            turn: 3,
            player: {
                id: 1,
                name: "Player 1",
                level: 1,
                force: 1,
                image: "https://picsum.photos/380/200",
                itens: [
                    { force: 1 },
                    { force: 2 },
                    { force: 4 },
                    { force: 3 },
                ]
            },
            players: [
                {
                    id: 2,
                    name: "Player 2",
                    level: 1,
                    force: 1,
                    image: "https://picsum.photos/380/200",
                },
                {
                    id: 3,
                    name: "Player 3",
                    level: 1,
                    force: 1,
                    image: "https://picsum.photos/380/200",
                },
                {
                    id: 4,
                    name: "Player 4",
                    level: 1,
                    force: 1,
                    image: "https://picsum.photos/380/200",
                },
                {
                    id: 5,
                    name: "Player 5",
                    level: 1,
                    force: 1,
                    image: "https://picsum.photos/380/200",
                }
            ]
        }
    },
    computed: {
        // Soma da força dos itens
        totalForcePlayer() {
            const SELF = this
            let total = 0
            SELF.player.itens.forEach(function (item) {
                total += item.force
            })
            return total
        }
    },
    methods: {
        // Remover item do inventário
        removeItem(item) {
            console.log(item)
            this.player.itens.splice(item, 1)
        },
        // Adicionar item ao inventário
        addItem() {
            this.player.itens.push({ force: this.formAddItem.value })
            this.formAddItem.value = 1
        }
    },
}).mount('#app')