<template>
    <main class="min-h-screen flex flex-col items-center justify-center bg-gray-50 space-y-10 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6">
        <div>
            <h1 class="text-center text-3xl font-extrabold text-gray-900">Create New Task</h1>
        </div>
        <form>
            <!-- <div class="flex flex-col">
                <label class="text-sm font-bold text-gray-600 mb-1" for="email">Title:</label>
                <input class="border rounded-md bg-white px-3 py-2" type="text" placeholder="Enter your Title" />
            </div>
            <div class="flex flex-col">
                <label class="text-sm font-bold text-gray-600 mb-1" for="email">Description</label>
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
            </div> -->
            <div class="flex flex-col form-group mb-6">
                <label for="title" class="form-label inline-block mb-2 text-gray-700 font-medium">Title:</label>
                <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-400 focus:outline-none" placeholder="Enter title" v-model="title">
            </div>
            <div class="form-group mb-6">
                <label for="description" class="form-label inline-block mb-2 text-gray-700 font-medium">Description:</label>
                <textarea class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-400 focus:outline-none" placeholder="Write description here..." v-model="description"></textarea>
            </div>

            <div class="dates">
                <div class="form-group mb-6">
                    <label for="deadline" class="form-label inline-block mb-2 text-gray-700 font-medium">Deadline:</label><br>
                    <input type="date" class="w-full text-gray-700 font-normal" v-model="deadline">
                </div>

                <div class="form-group mb-6">
                    <label for="deadline" class="form-label inline-block mb-2 text-gray-700 font-medium">Date Completed:</label><br>
                    <input type="date" class="w-full mt-2 text-gray-700 font-normal" v-model="date_completed">
                </div>
            </div>

            <div>
                <button class="w-full bg-sky-500 text-white rounded-md p-2">Sign in</button>
            </div>
        </form>
      </div>
    </main>
    
</template>

<script setup>

</script>

<style scoped>
input[type=date] {
    border: 1px solid #c4c4c4;
    border-radius: 5px;  
    background-color: #fff;
    padding: 3px 5px;
    box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);
}
input[type=date]:focus {
    outline: 0.1em solid rgb(38, 147, 236);
}
</style>