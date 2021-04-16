module.exports = {
  async insert(img) {
    await this.create({
      img: img,
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
    const slideShow = await this.findAll();
    return slideShow;
  },
};
