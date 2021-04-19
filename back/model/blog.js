const { select } = require('../controler/blog');

module.exports = {
  async post(heading, author, content) {
    await this.create({
      heading: heading,
      author: author,
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
  async put(id, heading, content) {
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
  async select(id) {
    const blog = await this.findAll({
      where: {
        id: id,
      },
    });
    return blog;
  },
  async selectAll() {
    const blogs = await this.findAll();
    return blogs;
  },
};
