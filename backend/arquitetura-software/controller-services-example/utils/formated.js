function formatBooks(data) {
  return {
    id: data.id,
    title: data.title,
    authorId: data.author_id,
  }
}

function formatAuthors(data) {
  return {
    id: data.id,
    firstName: data.first_name,
    lastName: data.last_name,
    middleName: data.middle_name,
    birthday: data.birthday,
    nationality: data.nationality,
  }
}

module.exports = {
  formatBooks,
  formatAuthors,
};