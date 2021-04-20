<template>
  <div style="padding-top: 20px">
    <EditBlog v-if="edit"></EditBlog>
    <div v-else>
      <Carrousel></Carrousel>
      <Divider />
      <AddBlog></AddBlog>
    </div>
  </div>
</template>

<script>
import AddBlog from './edit/addBlog';
import EditBlog from './edit/editBlog';
import Carrousel from './edit/caroucel';
export default {
  components: {
    AddBlog,
    EditBlog,
    Carrousel,
  },
  computed: {
    edit() {
      return this.$store.state.edit;
    },
  },
};
</script>

<style></style>
