<template>
  <div id="app" class="small-container">
    <start-header />
    <item-view :items="items" />
    <h1>Employees</h1>
    <employee-table :employees="employees" />
  </div>
</template>

<script>
import ItemView from './components/ItemView.vue'
import StartHeader from './components/StartHeader.vue'
import EmployeeTable from './components/EmployeeTable.vue'

export default {
  name: 'App',
  components: {
    ItemView,
    StartHeader,
    EmployeeTable
  },
  data() {
    return {
        items: [
        {
          id: 1,
          "name":"phone",
          "url":"phone.png",
          "audio":"phone.mp3"
        },
        {
          id: 2,
          "name":"moon",
          "url":"moon.png",
          "audio":"moon.mp3"
        },
        {
          id: 3,
          "name":"shoes",
          "url":"shoes.png",
          "audio":"shoes.mp3"
        }
      ],
        employees: [
        {
          id: 1,
          name: 'Killer Hendricks',
          email: 'richar@piedpiper.com',
        },
        {
          id: 2,
          name: 'Bertram Gilfoyle',
          email: 'gilfoyle@piedpiper.com',
        },
        {
          id: 3,
          name: 'Dinesh Chugtai',
          email: 'dineshar@piedpiper.com',
        },
      ]
      }
    }
}
</script>

<style>
  button {
    background: #009435;
    border: 1px solid #009435;
  }

  .small-container {
    max-width: 680px;
  }
</style>
