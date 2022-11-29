const { createApp } = Vue;

    createApp({
        data() {
            return {
                newTask: "",
                error: false,
                tasks: [
                    { text: 'Fare i compiti', done: false }, 
                    { text: 'Fare la spesa', done: true }, 
                    { text: 'Fare il bucato', done: false }
                ]
            }
        },

        methods: {
            addTask() {
                if (this.newTask.length < 5 || this.newTask === "") {
                    
                    this.error = true;
                } else {
                    this.error = false;

                    this.tasks.push({text: this.newTask, done: false});
                }

                this.newTask = "";
            },

            removeTask(index) {
                this.tasks.splice(index, 1);
            },

            doUndo(arrayElement) {
                arrayElement.done = !arrayElement.done;
            }
        }
    }).mount("#app")