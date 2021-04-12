module.exports = {
  async insert(heading, content) {
    await this.create({
      heading: heading,
      content: content,
    });
  },
  async delete(id) {
    let res = await this.destroy({
      where: {
        id: id,
      },
    });
    return res;
  },
  async updateBlog(id, heading, content) {
    let res = await this.update(
      {
        heading: heading,
        content: content,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res[0];
  },
  async selectAll() {
    const blogs = await this.findAll();
    return blogs;
  },
};
