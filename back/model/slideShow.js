module.exports = {
  async insert(path) {
    await this.create({
      img: path,
    });
    return true;
  },
  async delete(id) {
    let res = await this.destroy({
      where: {
        id: id,
      },
    });
    return res;
  },
  async updateBlog(id, img) {
    let res = await this.update(
      {
        img: img,
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
    const slideShow = await this.findAll({ attributes: ['id', 'img'] });
    return slideShow;
  },
};
