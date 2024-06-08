const response = (status, values, res) => {
  const data = {
    status,
    values,
  };

  res.status(data.status);
  res.json(data);
  res.end();
};

export default response;
