// target all like buttons
// use the involvement api for puting the like in the db
// retrieve the likes

const likes = async () => {
  const data = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9YE3WJxp5XfKqI5kUFRZ/likes',
    {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({
        item_id: 100,
      }),
    },
  );
  const response = await data.json();
  return response;
};

export default likes;