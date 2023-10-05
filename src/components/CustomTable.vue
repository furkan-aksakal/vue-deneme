<template>
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :search="search"
    :headers="headers"
    :items-length="totalItems"
    :items="serverItems"
    :loading="loading"
    class="elevation-1"
    item-value="name"
    @update:options="loadItems"
  >
    <template v-slot:tfoot>
      <tr>
        <td>
          <v-text-field v-model="id" hide-details placeholder="ID ile arat" class="ma-2" density="compact"></v-text-field>
        </td>
      </tr>
    </template>
  </v-data-table-server>
</template>

<script>
  import AxiosHelper from "../helper/axiosHelper"; 
  export default {
    data: () => ({
      itemsPerPage: 5,
      headers: [
        { title: 'ID', key: 'id' },
        {
          title: 'İsim',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        { title: 'Mail Adresi', key: 'email' },
        { title: 'İçerik', key: 'body' },
        { title: 'Actions', key: 'actions', sortable: false },
      ],
      serverItems: [],
      loading: true,
      totalItems: 0,
      id: '',
      calories: '',
      search: '',
    }),
    watch: {
      id () {
        this.search = String(Date.now())
      }
    },
    methods: {
     loadItems () {
        this.loading = true
         AxiosHelper.get(`/users`).then(response => {
          console.log(response.data);
          this.serverItems =response.data;
          this.loadItems = response.data.length;
          this.loading = false;
         }).catch(err => {
          console.log("errr");
         });
        

      },
    },
  }
</script>