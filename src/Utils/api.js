const axios = require("axios");

const fetchTopics = () => {
  return axios
    .get("https://jlb-news-app.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data.topics;
    });
};

const fetchArticles = (slug, sort_by, order) => {
  return axios
    .get("https://jlb-news-app.herokuapp.com/api/articles", {
      params: {
        topic: slug,
        sort_by: sort_by,
        order: order
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

const fetchArticleByID = article_id => {
  return axios
    .get(`https://jlb-news-app.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    });
};

const fetchComments = article_id => {
  return axios
    .get(
      `https://jlb-news-app.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data.comments;
    });
};

const postComment = (article_id, username, body) => {
  return axios
    .post(
      `https://jlb-news-app.herokuapp.com/api/articles/${article_id}/comments`,
      { username, body }
    )
    .then(({ data }) => {
      return data.comment;
    });
};
const deleteComment = comment_id => {
  return axios.delete(
    `https://jlb-news-app.herokuapp.com/api/comments/${comment_id}`
  );
};

const patchCommentVotes = (inc_votes, comment_id) => {
  return axios.patch(
    `https://jlb-news-app.herokuapp.com/api/comments/${comment_id}`,
    {
      inc_votes
    }
  );
};

const patchArticlesVotes = (inc_votes, article_id) => {
  return axios.patch(
    `https://jlb-news-app.herokuapp.com/api/articles/${article_id}`,
    {
      inc_votes
    }
  );
};

const fetchUsers = () => {
  return axios
    .get(`https://jlb-news-app.herokuapp.com/api/users`)
    .then(({ data }) => {
      return data.users;
    });
};
const postUser = (username, name, avatar_url) => {
  return axios
    .post(`https://jlb-news-app.herokuapp.com/api/users`, {
      username,
      name,
      avatar_url
    })
    .then(({ data }) => {
      return data.user;
    });
};
const deleteArticle = article_id => {
  return axios.delete(
    `https://jlb-news-app.herokuapp.com/api/articles/${article_id}`
  );
};

const postTopic = (slug, description) => {
  console.log(slug, "slug", description, "description", "In API");
  return axios
    .post(`https://jlb-news-app.herokuapp.com/api/topics/`, {
      slug,
      description
    })
    .then(({ data }) => {
      console.log("data");
      return data.topic;
    });
};
module.exports = {
  fetchTopics,
  fetchArticles,
  fetchArticleByID,
  fetchComments,
  postComment,
  deleteComment,
  patchCommentVotes,
  patchArticlesVotes,
  fetchUsers,
  postUser,
  deleteArticle,
  postTopic
};
