<template>
  <div style="padding-top: 20px">
    <EditBlog v-if="edit"></EditBlog>
    <div v-else>
      <row>
        <Col :xs="1" :sm="1" :md="2" :lg="3" :xl="4"></Col>
        <Col :xs="22" :sm="22" :md="20" :lg="18" :xl="16">
          <Carrousel></Carrousel>
          <Divider />
          <AddBlog></AddBlog>
          <Divider />
          <EditBlogTips></EditBlogTips>
        </Col>
        <Col :xs="1" :sm="22" :md="2" :lg="3" :xl="4"></Col>
      </row>
    </div>
  </div>
</template>

<script>
import AddBlog from './edit/addBlog';
import EditBlog from './edit/editBlog';
import Carrousel from './edit/caroucel';
import EditBlogTips from './edit/editBlogTips';
export default {
  components: {
    AddBlog,
    EditBlog,
    Carrousel,
    EditBlogTips,
  },
  computed: {
    edit() {
      return this.$store.state.edit;
    },
  },
};
</script>

<style></style>
