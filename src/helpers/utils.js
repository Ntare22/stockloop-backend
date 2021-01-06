export const getPagination = (page, size,search) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;
     
    return search? { limit, offset,where:{first_name: { [Op.like]: `%${search}%` } }}:{limit, offset};
  };